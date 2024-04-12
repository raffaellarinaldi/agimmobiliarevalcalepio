const
baseConfig = require('./src/common/base/src/config/base.js'),
dateConfig = require('./src/common/base/src/config/date.js'),
eleventySass = require('eleventy-sass'),
minifyConfig = require('./src/common/base/src/config/minify.js'),
serverlessConfig = require('./src/common/base/src/config/serverless.js')

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(baseConfig)
	eleventyConfig.addPlugin(dateConfig)
	eleventyConfig.addPlugin(eleventySass)
	eleventyConfig.addWatchTarget('./src/assets/')
	eleventyConfig.addPlugin(minifyConfig)
	eleventyConfig.addPlugin(serverlessConfig)
	eleventyConfig.addLayoutAlias('home', '../layouts/home.njk')
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
