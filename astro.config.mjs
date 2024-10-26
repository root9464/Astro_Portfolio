// @ts-check
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),

  server: {
    port: 3000,
    host: true,
  },
  integrations: [
    tailwind({
      configFile: './tailwind.config.ts',
      nesting: true,
    }),
    react(),
  ],
});
