import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = !!process.env.GITHUB_PAGES;

export default defineConfig({
  site: 'https://baslie.github.io',
  base: isGitHubPages ? '/mike-vinogradov/' : '/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
