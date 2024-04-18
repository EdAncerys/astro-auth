import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import clerk from 'astro-clerk-auth';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    clerk({
      afterSignInUrl: '/dashboard',
      afterSignUpUrl: '/api/v1/auth/user',
      afterSignOutUrl: '/',
      signInUrl: '/sign-in',
      signUpUrl: '/sign-up',
    }),
    react(),
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
