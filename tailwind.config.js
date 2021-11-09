module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },

    },
    container: {
      screens: {
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px"
      },
      padding: "1rem",
      center: true
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}