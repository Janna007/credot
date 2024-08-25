/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '400px',
        'xlg':"1200px" ,
         '3xl': '1650px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [],
}

