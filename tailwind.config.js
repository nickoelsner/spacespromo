const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        orange: colors.orange,
        teal: colors.teal,
        lime: colors.lime,
        'primary-text': colors.blue[900],
        primary: colors.blue[600],
        'primary-hover': colors.blue[700],
        'primary-50': colors.blue[50],
        'primary-200': colors.blue[200],
        'primary-300': colors.blue[300],
        'primary-400': colors.blue[400],
        'primary-500': colors.blue[500],
        'primary-600': colors.blue[600],
        'primary-700': colors.blue[700],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
