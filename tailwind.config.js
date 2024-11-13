/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor:{
        'primary' : '#173B45',
        'secondary' : '#F8EDED',
      },
      colors:{
        'grey' : '#F8EDED',
        'orange' : '#FF8225',
        'red' : '#B43F3F',
        'blue' : '#173B45',
      }
    },
    fontFamily:{
      'hero-font' : 'Sriracha'
    },
    
  },
  plugins: [],
}

