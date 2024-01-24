import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import million from 'million/compiler';
import { VitePWA } from 'vite-plugin-pwa';

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
        manifest: {
          name: 'Astro PWA Starter', // Change this to your website's name.
          short_name: 'Astro PWA Starter', // Change this to your website's short name.
          description:
            'Astro PWA Starter is an opionated Astro starter for building robust static websites.', // Change this to your websites description.
          theme_color: '#30E130', // Change this to your primary color.
          background_color: '#ffffff', // Change this to your background color.
          display: 'minimal-ui',
          icons: [
            {
              src: '/favicons/favicon-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/favicons/favicon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/favicons/favicon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
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
