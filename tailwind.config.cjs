/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
    './index.html',],
  theme: {
    extend: {
      'colors':{
        'darkcyan': '#3C8067',
        'vdarkcyan':"#1A4031",
        "cream": "#F3EAE3",       
          "verydarkblue": "#1c232b",
          "darkgrayishblue": "#6c7289",
          "white": "#ffffff",
      },
      fontFamily:{
        "fraunces": ['Fraunces', "serif"],
        "montserrat":['Montserrat', "sans-serif"]
      },
      backgroundImage: {
        'mobilebg': "url('/src/images/image-product-mobile.jpg')",  
        'desktopbg': "url('/src/images/image-product-desktop.jpg')",
      }
    },
  },
  plugins: [],
}
