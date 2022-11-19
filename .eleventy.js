const
{ EleventyServerlessBundlerPlugin } = require('@11ty/eleventy'),
htmlmin = require('html-minifier').minify;

module.exports = (eleventyConfig) => {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPassthroughCopy({
    './src/static': './'
  });
  eleventyConfig.addLayoutAlias('base', '../layouts/base.njk');
  // Minify HTML in production
  eleventyConfig.addTransform('minifyHTML', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html') && process.env.ELEVENTY_ENV !== 'development') {
      return htmlmin(content, {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
        useShortDoctype: true
      });
    }
    return content;
  });
  eleventyConfig.addNunjucksShortcode('year', () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode('11ty_version', () => require('@11ty/eleventy/package.json').version);
  // Serverless
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: 'onrequest',
    functionsDir: './netlify/functions/'
  });
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      data: 'data',
      includes: 'includes',
      layouts: 'layouts',
      output: 'dist'
    }
  }
}
