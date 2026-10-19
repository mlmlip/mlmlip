import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://mlmlip.com',
  // Server output is required for the owned inquiry endpoint (src/pages/api/inquiry.ts).
  output: 'server',
  adapter: vercel(),
  security: {
    checkOrigin: false
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        fr: 'fr',
        es: 'es'
      }
    }
  })],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    inlineStylesheets: 'auto'
  }
});
