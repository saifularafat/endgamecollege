/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open': ['Open Sans', 'sans-serif'],
        'Lobster': ['Lobster', 'cursive'],
      },
      colors: {
        'color-btn': '#EB6435',
        'sec-btn': '#1795C4',
        'title-color': '#151515',
        'description-color': '#737373',
        'second-title': '#444444',
      },
    },
  },
  plugins: [require("daisyui")],
}

