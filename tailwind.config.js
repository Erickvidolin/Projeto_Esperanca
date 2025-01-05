/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [" ./index.html",
    "./src/**/*.{css,js}",],
  theme: {
    extend: {
      backgroundImage: {
        "01": "url('./img/karolina-gra.jpg')",
      },

      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'custom': ['"NomeDaFonte"', 'serif'], // Para fontes personalizadas
      },

      screens: {
        'custom': '425px', // Cria um breakpoint chamado 'custom' para telas maiores que 1440px
      },

    },

    
  },
  plugins: [],
}

