import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://baslie.github.io',
  base: '/mike-vinogradov',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
