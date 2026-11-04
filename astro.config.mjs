import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ama-concordia.vercel.app',
  integrations: [sitemap()],
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: {
    // O lightningcss dobra `animation-timeline` dentro do atalho `animation`
    // e os navegadores descartam a regra. Sem minificar, as animações por scroll funcionam.
    build: { cssMinify: false },
  },
});
