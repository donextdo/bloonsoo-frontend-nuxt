/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      xxl: '1440px'
    },
    fontFamily:{
      montserrat:['Montserrat', 'sans-serif']
    },
    extend: {
      spacing:{
        "big":"48rem",
        "half-screen": "50vh",
        "70vh": "70vh",
        "onepix": "1px",
        "rem20": "20rem"
      },

      colors: {
        'darkblue': '#3A1C61',
        'darkyellow': '#FE8A1F',
        'semidarkyellow': '#FFC701',
        'lightblue': '#EBF5FF'
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    require('flowbite')
  ],

}
