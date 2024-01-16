const fs = require('fs')
const directoryOutputPlugin = require('@11ty/eleventy-plugin-directory-output')
const handlebars = require('handlebars')
const helpers = require('./lib/hbs-custom-helpers')

module.exports = function (config) {
  require('dotenv').config()
  config.setLibrary('hbs', handlebars)
  config.setQuietMode(true)
  config.addWatchTarget('./src/_includes/')
  config.addPlugin(directoryOutputPlugin)
  config.addGlobalData('env', process.env)

  const fontSrc = `src/${process.env.PROJECT}/fonts`
  const jsSrc = `src/${process.env.PROJECT}/js`
  const imagesSrc = `src/${process.env.PROJECT}/images`
  const customCssSrc = `src/${process.env.PROJECT}/css/cas-icons.css`
  const prismCss = `src/${process.env.PROJECT}/css/prism.css`

  config.addPassthroughCopy({[fontSrc]: 'fonts'})
  config.addPassthroughCopy({[imagesSrc]: 'images'})
  config.addPassthroughCopy({[jsSrc]: 'js'})
  config.addPassthroughCopy({[customCssSrc]: 'css', [prismCss]: 'css'})

  // Display 404 page in BrowserSnyc
  config.setServerOptions({
    liveReload: true,
    domDiff: true,
    port: 8080,
    watch: [`${process.env.DEST}/${process.env.PROJECT}`],
    showAllHosts: false,
    showVersion: false,
    files: `${process.env.DEST}/${process.env.PROJECT}`,
  })
  // Eleventy configuration
  return {
    dir: {
      input: `pages/${process.env.PROJECT}`,
      includes: process.env.INCLUDES,
      output: `${process.env.DEST}/${process.env.PROJECT}`,
    },
    // Files read by Eleventy, add as needed
    templateFormats: ['hbs', 'njk', 'md', 'txt'],
    htmlTemplateEngine: 'hbs',
    passthroughFileCopy: true,
  }
}
