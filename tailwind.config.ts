/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

export default <Config>{
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        uiBackground: '#070811',
      },
      backgroundImage: {
        uiPinkGradient: 'linear-gradient(99deg, #BC3CD8 0%, #C54B8C 100%)',
      },
    },
  },
  plugins: [],
};
