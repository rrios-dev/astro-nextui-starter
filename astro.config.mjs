import partyTown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import astroI18next from 'astro-i18next';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import million from 'million/compiler';
import graphqlLoader from 'vite-plugin-graphql-loader';

// TODO: Replace with your own website
const NAME_WEBSITE = 'https://rrios.dev';

export default defineConfig({
  site: NAME_WEBSITE,
  integrations: [
    million.vite({ mode: 'react', server: true, auto: true }),
    react(),
    tailwind(),
    icon(),
    sitemap(),
    compress(),
    astroI18next(),
    partyTown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  vite: {
    plugins: [graphqlLoader()],
  },
});
