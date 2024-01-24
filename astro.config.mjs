import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import million from 'million/compiler';
import { VitePWA } from 'vite-plugin-pwa';

import SEO_CONFIG from '@/config/seo';
import tailwind from '@astrojs/tailwind';

const NAME_WEBSITE = 'https://app.rrios.dev';

export default defineConfig({
  site: NAME_WEBSITE,
  integrations: [
    million.vite({ mode: 'react', server: true, auto: true }),
    react(),
    tailwind(),
    sitemap(),
    compress(),
  ],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest,
        workbox: {
          globDirectory: 'dist',
          globPatterns: [
            '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
          ],
          navigateFallback: null,
        },
      }),
    ],
  },
});
