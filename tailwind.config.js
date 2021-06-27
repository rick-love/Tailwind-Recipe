module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primaryColor: '#FF6363',
        secondaryColor: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        body:['Noto Sans JP']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
