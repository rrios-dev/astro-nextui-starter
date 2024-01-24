const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,tsx,astro}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '6xl': '1152px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
  plugins: [nextui()],
};
