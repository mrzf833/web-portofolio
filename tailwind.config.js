module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "navbar-mobile": "#35405F",
        "hover-nav-bot" : "#1A1D28"
      }
    },
  },
  variants: {
    extend: {
      padding: ['hover']
    },
  },
  plugins: [],
}
