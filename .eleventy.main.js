const
htmlmin = require('html-minifier').minify

module.exports = (eleventyConfig) => {
    eleventyConfig.setTemplateFormats('html,liquid,njk')
    //eleventyConfig.addTransform('minifyHTML', require('./libraries/minifier'))
    eleventyConfig.addTransform('minify', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html') && process.env.ELEVENTY_ENV !== 'development') {
		  return htmlmin(content, {
			  collapseWhitespace: true,
			  conservativeCollapse: true,
			  removeComments: true,
			  useShortDoctype: true
		  })
	  }
	  return content
    })
    eleventyConfig.addShortcode('date', () => `${new Date().toISOString().slice(0, 10)}`)
    eleventyConfig.addNunjucksShortcode('year', () => `${new Date().getFullYear()}`)
    eleventyConfig.addShortcode('11ty_version', () => require('@11ty/eleventy/package.json').version)
}
