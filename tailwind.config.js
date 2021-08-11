const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   monsterrat: ['Monsterrat', 'sans-serif'],
      //   sans: ['AtkinsonHyperlegible', 'open-sans', 'sans-serif'],
      // },
      colors: {
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        orange: colors.orange,
        teal: colors.teal,
        lime: colors.lime,
        'primary-text': colors.violet[900],
        primary: colors.violet[800],
        'primary-hover': colors.violet[900],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
