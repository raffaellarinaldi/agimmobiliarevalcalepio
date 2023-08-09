module.exports = (eleventyConfig) => {
    eleventyConfig.setTemplateFormats('html,liquid,njk')
    eleventyConfig.addTransform('minifyHTML', require('./libraries/minifier'))
    eleventyConfig.addShortcode('date', () => `${new Date().toISOString().slice(0, 10)}`)
    eleventyConfig.addNunjucksShortcode('year', () => `${new Date().getFullYear()}`)
    eleventyConfig.addShortcode('11ty_version', () => require('@11ty/eleventy/package.json').version)
}
