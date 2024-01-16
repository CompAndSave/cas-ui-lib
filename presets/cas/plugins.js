/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const themeColors = require('./colors.js')

const colors = themeColors.theme.extend.colors

module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({addBase}) {
      addBase({
        html: {
          fontSize: '106.25%',
          lineHeight: 1.45,
          color: colors['dk-gray'],
          wordSpacing: '.06em',
        },
      })
    }),
  ],
}
