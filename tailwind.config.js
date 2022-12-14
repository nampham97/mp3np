/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'main-100': '#f9dbdb',
        'main-200': '#f9c6c5',
        'main-300': '#b72479',
      },
      colors: {
        'main-100': '#f9dbdb',
        'main-200': '#f9c6c5',
        'main-300': '#b72479',
      }
    },
  },
  plugins: [],
}
