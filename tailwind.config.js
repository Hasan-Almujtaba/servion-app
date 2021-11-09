module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#424D83',
        secondary: '#93A5FF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
