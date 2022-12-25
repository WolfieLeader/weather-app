/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_API_KEY2: string;
  readonly VITE_RAPID_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
