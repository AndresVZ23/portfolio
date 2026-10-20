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

Envía cada mensaje directo a **abelandresvallez@gmail.com** con [FormSubmit](https://formsubmit.co), sin cuentas ni claves.

- La **primera vez** que alguien escribe desde un dominio nuevo (localhost, `abelvalle.vercel.app`, dominio propio),
  FormSubmit te manda un correo de activación: ábrelo y haz clic en **Activate Form** una sola vez.
- Hasta entonces el formulario muestra "El buzón aún no está activado" (nunca finge éxito).
- Para cambiar el correo de destino, edita `links.email` en `src/content.ts`.

## Código y publicación

Repositorio: https://github.com/AndresVZ23/portfolio

Publicado en **Vercel** (https://abelvalle.vercel.app), conectado a este repositorio:
cada cambio que subas a `main` se publica solo en uno o dos minutos.

## Detalles

- La intro tipo "arranque del sistema" se muestra una vez por sesión y se puede saltar.
- Respeta la preferencia "reducir movimiento" del sistema (desactiva animaciones).
- La red 3D se pausa cuando no está en pantalla y usa menos nodos en celular.
- Las fuentes van incluidas en el proyecto (no dependen de Google Fonts).
