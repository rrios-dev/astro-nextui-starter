import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import million from 'million/compiler';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    million.vite({ mode: 'react', server: true, auto: true }),
    react(),
    tailwind(),
  ],
});
