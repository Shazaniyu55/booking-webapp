/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('../public/clean1.jpg')",
      },
    },
    colors: {
      'black': '#f1b31c',
      'yellow': '#66CCFF',
      'white':'#FFFDFD',
      'blue':'#92d3f5',
      'black1':'#252525',
      'gold':'#FEDF30'

     
    },
    
  },
  plugins: [],
}