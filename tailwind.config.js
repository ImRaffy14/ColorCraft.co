/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      Anton:['Anton','sans-serif'],
      russoOne:['Russo One', 'sans-serif'],
      Lilita:['Lilita One','sans-serif']
    },
  },
  plugins: [require("daisyui")],
}