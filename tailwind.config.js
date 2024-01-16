/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,js,hbs}',
    './pages/**/*.{html,js,hbs}',
    './output/**/*.{html,js,css}',
  ],
  presets: [
    require('./presets/cas/base.js'),
    require('./presets/cas/colors.js'),
    require('./presets/cas/plugins.js'),
  ],
}
