const
{ EleventyServerlessBundlerPlugin } = require('@11ty/eleventy'),
htmlmin = require('html-minifier').minify

module.exports = (eleventyConfig) => {
  require('./src/util/.eleventy')(eleventyConfig)
  eleventyConfig.setQuietMode(true)
  eleventyConfig.addPassthroughCopy({
    './src/static': './'
  })
  eleventyConfig.addLayoutAlias('base', '../layouts/base.njk')
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: 'onrequest',
    functionsDir: './netlify/functions/',
    copy: [
      { from: 'src/util', to: 'src/util' }
    ]
  })
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'dist',
      data: 'data',
      includes: 'includes',
      layouts: 'layouts'
    }
  }
}
