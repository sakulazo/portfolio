// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://portfolio.sakulazo.com',
  integrations: [
    sitemap({
      // /cv-ats va con `noindex`: es el documento de trabajo para portales de
      // empleo, no la versión canónica del currículum. No debe salir en el
      // sitemap, que es donde se anuncia el contenido indexable.
      filter: (page) => !page.includes('/cv-ats'),
    }),
  ],
});
