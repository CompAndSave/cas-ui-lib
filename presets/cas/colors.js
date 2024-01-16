/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          'hl-bg': 'rgba(0, 115, 192, 0.15)',
          hl: '#27a8ff',
          lighter: '#0082da',
          DEFAULT: '#0073c0',
          darker: '#0068ad',
        },
        secondary: {
          'hl-bg': 'rgba(1, 150, 228, 0.2)',
          hl: '#4dc1fe',
          lighter: '#01a7fd',
          DEFAULT: '#0196e4',
          darker: '#0187cd',
        },
        success: '#00aa61',
        warning: '#f9c035',
        info: '#0196e4',
        alert: '#e12b1d',
        invalid: '#fef5f4',
        blue: '#0073c0',
        cyan: '#0196e4',
        magenta: {
          'hl-bg': 'rgba(250, 42, 146, 0.2)',
          hl: '#fc8ec5',
          lighter: '#fb439f',
          DEFAULT: '#fa2a92',
          darker: '#f90d83',
        },
        orange: {
          'hl-bg': 'rgba(225, 43, 29, 0.2)',
          hl: '#ed7f77',
          DEFAULT: '#e12b1d',
        },
        'dk-yellow': {
          'hl-bg': 'rgba(249, 192, 53, 0.2)',
          hl: '#fcdf98',
          lighter: '#fac84e',
          DEFAULT: '#f9c035',
          darker: '#f8b718',
        },
        'lt-yellow': {
          'hl-bg': 'rgba(250, 215, 28, 0.2)',
          hl: '#fce980',
          lighter: '#fbdb35',
          DEFAULT: '#fad71c',
          darker: '#f5cf05',
        },
        green: {
          'hl-bg': 'rgba(0, 170, 97, 0.2)',
          hl: '#11ff99',
          lighter: '#00c470',
          DEFAULT: '#00aa61',
          darker: '#009957',
        },
        midnight: '#202234',
        ice: '#f4fbfe',
        black: '#333333',
        white: colors.white,
        'off-white': colors.neutral[100],
        'dk-gray': '#505464',
        'md-gray': '#676d7f',
        'ui-gray': '#a3a8b2',
        'ui-lt-gray': '#c1c6cb',
        'lt-gray': '#dfe3e4',
        callout: {
          DEFAULT: '#f2faff',
          error: '#fef5f4',
          success: '#f7fffb',
        },
      },
      borderColor: {
        DEFAULT: '#dfe3e4',
      },
    },
  },
}
