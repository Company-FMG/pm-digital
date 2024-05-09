/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'bluemike': '#1A23F1',
        'red': '#FC9697',
      },
      width: {
        'mapW': '34rem',
        'custom': '52rem'
      },
      height: {
        'mapH': '30rem',
      }
    },
  },
  plugins: [],
}