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
        'grey-custom': '#F5F5F5',
      },
      width: {
        'map-mdW': '29rem',
        'custom': '52rem'
      },
      height: {
        'map-mdH': '30rem',
      },
      margin: {
        'custom' : '30rem',
      },
      backgroundImage: {
        'dropdown-icon': "url(./src/assets/droparrow.svg)"
      }
    },
  },
  plugins: [],
}