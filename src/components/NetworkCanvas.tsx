import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useApp } from '../context';

/**
 * Red neuronal / telaraña 3D detrás del hero.
 * Nodos que flotan en el espacio y se conectan cuando están cerca;
 * el conjunto gira suavemente y sigue al cursor.
 */
export default function NetworkCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useApp();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.innerWidth < 768;
    const COUNT = small ? 70 : 140;
    const MAX_DIST = small ? 2.3 : 2.1;
    const BOUNDS = { x: 9, y: 5, z: 4 };

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    } catch {
      return; // sin WebGL: el hero sigue funcionando sin la red
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, 11);

    const group = new THREE.Group();
    scene.add(group);

    // Nodos
    const positions = new Float32Array(COUNT * 3);
    const velocities: THREE.Vector3[] = [];
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() * 2 - 1) * BOUNDS.x;
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * BOUNDS.y;
      positions[i * 3 + 2] = (Math.random() * 2 - 1) * BOUNDS.z;
      velocities.push(new THREE.Vector3((Math.random() - 0.5) * 0.008, (Math.random() - 0.5) * 0.008, (Math.random() - 0.5) * 0.006));
    }
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const dotTexture = (() => {
      const c = document.createElement('canvas');
      c.width = c.height = 64;
      const g = c.getContext('2d')!;
      const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.35, 'rgba(255,255,255,0.8)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grad;
      g.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    })();

    const pointsMat = new THREE.PointsMaterial({
      size: small ? 0.16 : 0.13,
      map: dotTexture,
      transparent: true,
      depthWrite: false,
      vertexColors: true,
    });
    const colors = new Float32Array(COUNT * 3);
    pointsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const points = new THREE.Points(pointsGeo, pointsMat);
    group.add(points);

    // Conexiones
    const maxSegments = COUNT * 8;
    const linePositions = new Float32Array(maxSegments * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({ transparent: true, depthWrite: false });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    const red = new THREE.Color();
    const gold = new THREE.Color();
    let appliedTheme = '';
    const applyTheme = () => {
      const dark = themeRef.current === 'dark';
      red.set(dark ? '#E0322B' : '#C8211A');
      gold.set(dark ? '#F2B544' : '#B07A10');
      for (let i = 0; i < COUNT; i++) {
        const c = i % 4 === 0 ? gold : red;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
      pointsGeo.attributes.color.needsUpdate = true;
      pointsMat.opacity = dark ? 0.95 : 0.75;
      lineMat.color.set(dark ? '#E0322B' : '#C8211A');
      lineMat.opacity = dark ? 0.22 : 0.2;
      appliedTheme = themeRef.current;
    };
    applyTheme();

    // Tamaño
    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    // Cursor
    const target = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    // Solo animar cuando el hero es visible
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(mount);

    const tmpA = new THREE.Vector3();
    const tmpB = new THREE.Vector3();
    let frame = 0;
    let raf = 0;

    const step = () => {
      raf = requestAnimationFrame(step);
      if (!visible) return;
      if (appliedTheme !== themeRef.current) applyTheme();

      // mover nodos
      for (let i = 0; i < COUNT; i++) {
        const v = velocities[i];
        let x = positions[i * 3] + v.x;
        let y = positions[i * 3 + 1] + v.y;
        let z = positions[i * 3 + 2] + v.z;
        if (Math.abs(x) > BOUNDS.x) v.x *= -1;
        if (Math.abs(y) > BOUNDS.y) v.y *= -1;
        if (Math.abs(z) > BOUNDS.z) v.z *= -1;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
      }
      pointsGeo.attributes.position.needsUpdate = true;

      // recalcular conexiones cada 2 frames
      if (frame++ % 2 === 0) {
        let seg = 0;
        for (let i = 0; i < COUNT && seg < maxSegments; i++) {
          tmpA.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
          for (let j = i + 1; j < COUNT && seg < maxSegments; j++) {
            tmpB.set(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
            if (tmpA.distanceToSquared(tmpB) < MAX_DIST * MAX_DIST) {
              linePositions.set([tmpA.x, tmpA.y, tmpA.z, tmpB.x, tmpB.y, tmpB.z], seg * 6);
              seg++;
            }
          }
        }
        lineGeo.setDrawRange(0, seg * 2);
        lineGeo.attributes.position.needsUpdate = true;
      }

      group.rotation.y += (target.x * 0.35 - group.rotation.y) * 0.03 + 0.0006;
      group.rotation.x += (target.y * 0.18 - group.rotation.x) * 0.03;
      renderer.render(scene, camera);
    };

    if (reduced) {
      renderer.render(scene, camera);
    } else {
      step();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      pointsGeo.dispose();
      lineGeo.dispose();
      pointsMat.dispose();
      lineMat.dispose();
      dotTexture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="network-canvas" aria-hidden="true" />;
}
