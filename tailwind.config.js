const { nextui } = require('@nextui-org/react');

const primaryVariant = {
  50: '#dffcf8',
  100: '#beeee9',
  200: '#9be1d9',
  300: '#76d3ca',
  400: '#52c6bb',
  500: '#39ada2',
  600: '#28877e',
  700: '#18615a',
  800: '#063b36',
  900: '#001614',
};

primaryVariant.DEFAULT = primaryVariant[500];

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
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#ffffff',
            foreground: '#000000',
            primary: primaryVariant,
          },
        },
        dark: {
          colors: {
            background: '#000000',
            foreground: '#ffffff',
            primary: primaryVariant,
          },
        },
      },
    }),
  ],
};
