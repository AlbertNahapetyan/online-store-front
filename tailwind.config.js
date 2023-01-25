/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'orange-arrows': 'url(/images/OrangeBG.jpg)',
      },
      margin: {
        '1/5': '20%',
      },
      spacing: {
        31.5: '31.5%',
        46: '11.4375rem',
        76: '18.75rem',
      },
      colors: {
        'aqua-150': '#2596be',
        'gray-150': '#838383',
        'black-250': '#232f3e',
        'gray-250': '#a5a8ac',
        'gray-350': '#2c3c4b',
        'gray-450': '#223040',
        'orange-350': '#ff9901',
      },
    },
  },
  plugins: [],
}
