// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nicoraffa.dev.ar',
  server: { port: 4321 },
  vite: {
    plugins: [tailwindcss()],
  },
});
