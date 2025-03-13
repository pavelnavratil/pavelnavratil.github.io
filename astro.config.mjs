import { defineConfig } from "astro/config";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://inp.cz',

  i18n: {
      locales: ['en', 'cs'],
      defaultLocale: 'en',
      routing: {
         prefixDefaultLocale: true
      },
      fallback: {
          cs: "en"
      }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});