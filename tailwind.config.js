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
        'map-mdW': '34rem',
        'custom': '52rem'
      },
      height: {
        'map-mdH': '30rem',
      }
    },
  },
  plugins: [],
}