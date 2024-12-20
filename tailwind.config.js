/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Specify the content paths
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add Roboto font under extend
      },
      container:{
        center:true,
        padding:10
      },
      colors:{
        "primary":"#f9951a",
      }
  
    },
   
  },
  plugins: [],
}
