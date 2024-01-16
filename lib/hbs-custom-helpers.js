'use strict'

var customHelpers = require('handlebars')
const handlebarsHelpers = require('handlebars-helpers')()

function getRgbColor(color) {
  const split = color.split(',')
  return split
    ? {
        r: parseInt(split[0]),
        g: parseInt(split[1]),
        b: parseInt(split[2]),
      }
    : null
}

function colorLuminance(r, g, b) {
  const lum = [r, g, b].map(function (val) {
    val /= 255
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  })
  return lum[0] * 0.2126 + lum[1] * 0.7152 + lum[2] * 0.0722
}

customHelpers.registerHelper(
  'repeatUntil',
  function (startIndex, lastIndex, item) {
    let content = ''
    while (++startIndex < lastIndex) {
      content += item.fn(startIndex)
    }
    return content
  }
)

customHelpers.registerHelper('concat', function () {
  let params = [...arguments].slice(0, -1)
  return [...params].join('')
})

customHelpers.registerHelper('surroundWithCurlyBraces', function (txt) {
  let res = '{{' + txt + '}}'
  return new customHelpers.SafeString(res)
})

customHelpers.registerHelper('compare', function (a, operator, b) {
  switch (operator) {
    case '==':
    case 'eq':
      return a == b
    case '===':
      return a === b
    case '!=':
    case 'neq':
      return a != b
    case '!==':
      return a !== b
    case 'lt':
    case '<':
      return a < b
    case 'lte':
    case '<=':
      return a <= b
    case 'gt':
    case '>':
      return a > b
    case 'gte':
    case '>=':
      return a >= b
    default:
      return false
  }
})

customHelpers.registerHelper(
  'contrastCheck',
  function (color1, color2, fontSize = 14) {
    const WCAG_AA_SM_RATIO = 1 / 4.5,
      WCAG_AA_LG_RATIO = 1 / 3,
      WCAG_FONT_CUTOFF = 18

    const color1Rgb = getRgbColor(color1),
      color2Rgb = getRgbColor(color2)

    let result = ''

    if (color1Rgb !== '' && color2Rgb !== '') {
      const color1Luminance = colorLuminance(
          color1Rgb.r,
          color1Rgb.g,
          color1Rgb.b
        ),
        color2Luminance = colorLuminance(color2Rgb.r, color2Rgb.g, color2Rgb.b)

      const ratio =
        color1Luminance > color2Luminance
          ? (color2Luminance + 0.05) / (color1Luminance + 0.05)
          : (color1Luminance + 0.05) / (color2Luminance + 0.05)

      result =
        fontSize >= WCAG_FONT_CUTOFF
          ? ratio < WCAG_AA_LG_RATIO
          : ratio < WCAG_AA_SM_RATIO
    }
    return result
  }
)

customHelpers.registerHelper('isLightColor', function (color) {
  const lightColors = ['ice', 'white', 'off-white']
  return lightColors.includes(color)
})

customHelpers.registerHelper('isDarkColor', function (color) {
  const darkColors = [
    'black',
    'dk-gray',
    'md-gray',
    'primary',
    'midnight',
    'orange',
    'alert',
  ]
  return darkColors.includes(color)
})

module.exports = {...handlebarsHelpers, customHelpers}
