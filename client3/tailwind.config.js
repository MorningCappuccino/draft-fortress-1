/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'button': 'url(/button-bg.svg)',
      },
      fontFamily: {
        'sans': ['Blender-Pro', ...defaultTheme.fontFamily.sans],
      }
    },
    colors: {
        'yellow': 'rgb(248, 239, 0)',
        'gray': '#979797',
        'white': '#fff',
        'black': '#000',
        'aqua': '#00F0FF'
    }
  },
  plugins: [],
}
