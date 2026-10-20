/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** ID del formulario de Formspree (ej. "xyzabcd"). Si no existe, el formulario abre el correo. */
  readonly VITE_FORMSPREE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
