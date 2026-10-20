# Portafolio · Abel Andrés Valle Zuta

Software Engineer · Co-founder & CTO de MyFix.
Hecho con **React + TypeScript + Vite**, red neuronal 3D con **Three.js** y animaciones con **GSAP**.
Bilingüe (ES/EN), modo oscuro y claro.

## Requisitos

- [Node.js](https://nodejs.org) 20 o superior (incluye `npm`).

## Correrlo en tu PC

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:5173
```

Para generar la versión final: `npm run build` (queda en la carpeta `dist/`). Para revisarla: `npm run preview`.

## Dónde cambiar cosas

| Quiero cambiar…                    | Archivo                                   |
| ---------------------------------- | ----------------------------------------- |
| Cualquier texto (ES y EN)          | `src/content.ts`                          |
| Links (correo, LinkedIn, GitHub…)  | `src/content.ts` → `links`                |
| Fotos e imágenes                   | `src/assets/img/` y `src/assets/logos/`   |
| CV descargable                     | `public/cv/CV-Abel-Andres-Valle-Zuta.pdf` |
| Colores de modo oscuro / claro     | `src/styles/global.css` (arriba)          |
| Estilos de cada sección            | `src/styles/sections.css`                 |
| Imagen al compartir el link        | `public/og.jpg`                           |

Para agregar una imagen a un carrusel: copia el archivo a `src/assets/img/`, impórtalo arriba de
`src/content.ts` y añádelo a la lista `mfImages`, `deImages` o `recImages` (y su texto alternativo en `alts`).

## Formulario de contacto

1. Crea un formulario gratis en [formspree.io](https://formspree.io).
2. Copia el ID (lo que va después de `/f/` en la URL).
3. Copia `.env.example` como `.env` y pon `VITE_FORMSPREE_ID=tu_id`.
4. En Vercel/Netlify, agrega la misma variable en *Environment Variables*.

Sin ese ID el formulario igual funciona: abre la app de correo del visitante con el mensaje prellenado.

## Subirlo a GitHub

```bash
git init
git add .
git commit -m "Portafolio v1"
git branch -M main
git remote add origin https://github.com/AndresVZ23/portfolio.git
git push -u origin main
```

## Publicarlo

**Vercel:** vercel.com → *Add New Project* → importa el repo → Vercel detecta Vite solo → *Deploy*.

**Netlify:** netlify.com → *Add new site* → *Import from Git* → elige el repo (el archivo `netlify.toml` ya trae la configuración) → *Deploy*.

## Detalles

- La intro tipo "arranque del sistema" se muestra una vez por sesión y se puede saltar.
- Respeta la preferencia "reducir movimiento" del sistema (desactiva animaciones).
- La red 3D se pausa cuando no está en pantalla y usa menos nodos en celular.
- Las fuentes van incluidas en el proyecto (no dependen de Google Fonts).
