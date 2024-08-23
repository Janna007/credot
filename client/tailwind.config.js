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
         '3xl':'1350px' // Custom breakpoint at 480px  
      },
    },
  },
  plugins: [],
}

