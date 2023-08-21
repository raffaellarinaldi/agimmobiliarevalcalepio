const
{ EleventyServerlessBundlerPlugin } = require('@11ty/eleventy'),
htmlmin = require('html-minifier').minify

module.exports = (eleventyConfig) => {
  //eleventyConfig.setQuietMode(true)
  require('./.eleventy.main')(eleventyConfig)
  // Copied for bugfixing purposes, workaround
  // eleventyConfig.setTemplateFormats('html,liquid,njk')
  // eleventyConfig.addShortcode('date', () => `${new Date().toISOString().slice(0, 10)}`)
  // eleventyConfig.addNunjucksShortcode('year', () => `${new Date().getFullYear()}`)
  // eleventyConfig.addShortcode('11ty_version', () => require('@11ty/eleventy/package.json').version)
  // eleventyConfig.addTransform('minify', (content, outputPath) => {
  //   if (outputPath && outputPath.endsWith('.html') && process.env.ELEVENTY_ENV !== 'development') {
		//   return htmlmin(content, {
		// 	  collapseWhitespace: true,
		// 	  conservativeCollapse: true,
		// 	  removeComments: true,
		// 	  useShortDoctype: true
		//   })
	 // }
	 // return content
  // })
  // Endcopied
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
