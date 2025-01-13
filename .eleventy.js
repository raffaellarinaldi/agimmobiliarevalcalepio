const
baseConfig = require('./src/common/base/src/config/base.js'),
dateConfig = require('./src/common/base/src/config/date.js'),
sassConfig = require('./src/common/base/src/config/sass.js'),
{ minifyHTML, combineJS, minifyJS } = require('./src/common/base/src/config/terser'),
serverlessConfig = require('./src/common/base/src/config/serverless.js')

const dirs = {
  input: 'src',
  output: 'dist',
  data: 'data',
  layouts: 'layouts',
  includes: 'includes'
}

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(baseConfig)
	eleventyConfig.addPlugin(dateConfig)
	sassConfig(eleventyConfig, dirs)
	eleventyConfig.addWatchTarget(dirs.input + '/assets/')
	eleventyConfig.addTransform('minifyHTML', minifyHTML)
	eleventyConfig.on('beforeBuild', async () => {
		await combineJS(dirs)
	})
	eleventyConfig.addPlugin(serverlessConfig)
	eleventyConfig.addLayoutAlias('home', '../layouts/home.njk')
	eleventyConfig.addPassthroughCopy({
		[`${dirs.input}/static`]: './'
	})
	return {
		passthroughFileCopy: true,
		dir: dirs
	}
}
