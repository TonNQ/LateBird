/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4C6FFF',
        secondary: '#FF7800',
        title: '#102844',
        paragraph: '#767278',
        grayShade: '#F8F8FB',
        primaryShade: '#E9EDFF',
        secondaryShade: '#FFEFE0',
        mainBlue: '#418CD1',
        mainPurple: '#9C41D1',
        darkBlue: '#285FAC'
      }
    }
  }
}
