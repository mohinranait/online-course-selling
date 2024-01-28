/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: '#2878EB',
      },
      container: {
        center:true,
      }
    },
  },
  plugins: [require("daisyui")],
}

