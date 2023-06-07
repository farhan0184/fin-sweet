/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": '#232536',
        "yellow-light": '#FFD050',
        "purple-light": '#592EA9',
        "dark-gray": '#4C4C4C',
        "medium-gray": '#6D6E76',
        "light-gray": '#F4F4F4',
        "lavender-light": '#F4F0F8',
        "light-yellow":'#FBF6EA'
      },
      fontFamily:{
        inter: ['Inter','sans-serif'],
        sen:['Open Sans','sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

