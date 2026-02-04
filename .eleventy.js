require('dotenv').config({ path: '.env' })

const
path = require('path'),
global = require(path.resolve(process.cwd(), 'src/submodules/base/eleventy/config/global')),
filters = require(path.resolve(process.cwd(), 'src/submodules/base/eleventy/config/filters')),
shortcodes = require(path.resolve(process.cwd(), 'src/submodules/base/eleventy/config/shortcodes')),
markdown = require(path.resolve(process.cwd(), 'src/submodules/base/eleventy/config/markdown')),
sass = require(path.resolve(process.cwd(), 'src/submodules/base/eleventy/hooks/sass')),
bundler = require(path.resolve(process.cwd(), 'src/submodules/base/eleventy/hooks/bundler')),
{ minifyHTML } = require(path.resolve(process.cwd(), 'src/submodules/base/eleventy/hooks/terser'))

const dirs = {
  input: 'src',
  output: 'dist',
  data: 'data',
  layouts: 'layouts',
  includes: 'includes'
}

module.exports = async function (eleventyConfig) {
	eleventyConfig.setQuietMode(true)
	eleventyConfig.addGlobalData('lang', 'it')
	eleventyConfig.addPlugin(global)
	eleventyConfig.addPlugin(filters, { input: dirs.input })
	eleventyConfig.addPlugin(shortcodes)
	eleventyConfig.setLibrary('md', markdown({
		tagClassMapByContext: {
			default: {},
			modals: {
				h3: 'h5'
			}
		},
		wrapperConfigByContext: {},
		getContext: (env) => {
			return env?.context || 'default'
		}
	}))
	eleventyConfig.addLayoutAlias('default', '../layouts/default.njk')
	eleventyConfig.addPassthroughCopy({
		[`${dirs.input}/static`]: './'
	})
	eleventyConfig.addWatchTarget(dirs.input + '/assets/')
	sass(eleventyConfig, dirs)
	bundler(eleventyConfig, {
		inputDir: path.join(dirs.input, 'assets/js'),
		outputDir: path.join(dirs.output, 'assets/js'),
		jsFiles: [
			'scripts.js',
		]
	})
	eleventyConfig.addTransform('minifyHTML', minifyHTML)
	return {
		passthroughFileCopy: true,
		dir: dirs
	}
}
