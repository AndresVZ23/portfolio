/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Opcional: otro endpoint para el formulario. Por defecto FormSubmit con tu correo. */
  readonly VITE_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
