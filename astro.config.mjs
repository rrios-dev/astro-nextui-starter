import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import million from 'million/compiler';
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
});
