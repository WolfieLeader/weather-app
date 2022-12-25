/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPEN_WEATHER_API_KEY: string;
  readonly VITE_RAPID_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
