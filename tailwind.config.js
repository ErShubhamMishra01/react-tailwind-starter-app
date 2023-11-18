/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content:  ["./src/**/*.{html,js,jsx}"], //for file extentions
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans], //for font family
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),  // for forms
  ],
}

