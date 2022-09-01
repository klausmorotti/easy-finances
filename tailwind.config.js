/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#BCEF30',
        'black': '#080808',
        'white': '#FFF',
        'gray': '#D9D9D9',
        'color1-gradient': '#090A0F',
        'color2-gradient': '#090A0E',
        'color3-gradient': '#0C0D12'
      },
      spacing: {
        'width-slider': '300%',
      },
      fontFamily: {
        inter:"'Inter', sans-serif",
        opensans:"'Open Sans', sans-serif"
      }
    },
  },
  plugins: [],
}
