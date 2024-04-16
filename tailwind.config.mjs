/** @type {import('tailwindcss').Config} */

const units = {
  '1/2': '50%',
  'unit-xs': '8px', // 2 * spacingUnit
  'unit-sm': '12px', // 3 * spacingUnit
  'unit-md': '16px', // 4 * spacingUnit
  'unit-lg': '22px', // 5.5 * spacingUnit
  'unit-xl': '36px', // 9 * spacingUnit
  'unit-2xl': '48px', // 12 * spacingUnit
  'unit-3xl': '80px', // 20 * spacingUnit
  'unit-4xl': '120px', // 30 * spacingUnit
  'unit-5xl': '224px', // 56 * spacingUnit
  'unit-6xl': '288px', // 72 * spacingUnit
  'unit-7xl': '384px', // 96 * spacingUnit
  'unit-8xl': '512px', // 128 * spacingUnit
  'unit-9xl': '640px', // 160 * spacingUnit
};

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      // add units to add to theme as padding
      padding: {
        ...units,
      },
      // add units to add to theme as margin
      margin: {
        ...units,
      },
      boxShadow: {
        // shadow-small
        small:
          '0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
        // shadow-medium
        medium:
          '0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
        // shadow-large
        large:
          '0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
      },
    },
  },
  plugins: [require('preline/plugin')],
};
