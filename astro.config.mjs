import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = !!process.env.GITHUB_PAGES;

export default defineConfig({
  site: 'https://baslie.github.io',
  base: isGitHubPages ? '/mike-vinogradov' : '/',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
