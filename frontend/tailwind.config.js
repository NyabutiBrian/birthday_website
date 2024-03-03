/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        Tangerine: ['Tangerine']
      },
      colors: {
        primary: '#DA2128',
        secondary: '#131318',
        whity: '#CDBAA1',
        darky: '#262626',
        success: '#2D3021',
      },
    },
  },
  plugins: [],
}

