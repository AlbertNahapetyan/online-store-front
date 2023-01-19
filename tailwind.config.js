/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-150': '#838383',
        'black-250': '#232f3e',
        'gray-250': '#a5a8ac',
        'gray-450': '#223040',
        'orange-350': '#ff9901',
      },
    },
  },
  plugins: [],
}