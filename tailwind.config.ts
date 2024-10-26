/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

export default <Config>{
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        uiBackground: '#070811',
        uiNeutral: '#1D1D1D',
      },
      backgroundImage: {
        uiPinkGradient: 'linear-gradient(99deg, #BC3CD8 0%, #C54B8C 100%)',
      },

      width: {
        uiCalc: 'calc(100%*0.9)',
      },

      height: {
        uiMinHeight: '700px',
      },

      borderRadius: {
        uiRounded: '50px',
      },
    },
  },
  plugins: [],
};
