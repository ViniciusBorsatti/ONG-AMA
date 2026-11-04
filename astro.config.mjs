import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://ong-ama.vercel.app',
  output: 'server',
  adapter: vercel(),
  trailingSlash: 'always',
  vite: {
    // O lightningcss dobra `animation-timeline` dentro do atalho `animation`
    // e os navegadores descartam a regra. Sem minificar, as animações por scroll funcionam.
    build: { cssMinify: false },
  },
});
