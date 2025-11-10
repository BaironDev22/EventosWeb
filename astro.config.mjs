import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://tu-dominio.com', // Cambia esto por tu dominio real
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    robotsTxt(),
  ],
  image: {
    domains: ['tu-dominio.com'],
  },
  vite: {
    ssr: {
      noExternal: ['aos'],
    },
  },
});
