import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useApp } from './context';
import BootSequence from './components/BootSequence';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import About from './components/About';
import MyFix from './components/MyFix';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { lang } = useApp();

  // Animaciones de entrada (hero) y de aparición al hacer scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.from('[data-hero]', {
        y: 36,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
        delay: sessionStorageBooted() ? 0.1 : 2.6,
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const end = Number(el.dataset.count);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <a href="#sobre-mi" className="skip-link">
        {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>
      <BootSequence />
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <About />
        <MyFix />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function sessionStorageBooted(): boolean {
  try {
    return sessionStorage.getItem('av-booted') === '1';
  } catch {
    return true;
  }
}
