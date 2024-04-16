import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import clerk from 'astro-clerk-auth';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), clerk()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
