const
path = require('path'),
{ series } = require('gulp'),
{ copyAssets } = require(path.resolve(process.cwd(), 'src/submodules/base/bundler/gulp/assets')),
{ downloadGoogleFonts } = require(path.resolve(process.cwd(), 'src/submodules/base/bundler/gulp/fonts'))

const config = {
  paths: {
    dist: './dist',
    css: 'assets/css',
    js: 'assets/js',
    fonts: 'assets/fonts',
    vendor: {
      css: './src/assets/css/vendor'
    }
  },
  nodeModules: {
    bootstrap: {
      scss: './node_modules/bootstrap/scss/**',
      js: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
    }
  },
  cdnResources: {
    css: [
      {
        url: 'https://cdn.jsdelivr.net/npm/aos@latest/dist/aos.css',
        rename: 'aos.min.css'
      },
      {
        url: 'https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@latest/dist/cookieconsent.min.css'
      },
      {
        url: 'https://cdn.jsdelivr.net/gh/orestbida/iframemanager@latest/dist/iframemanager.min.css'
      },
      {
        url: 'https://cdn.jsdelivr.net/npm/tiny-slider@latest/dist/tiny-slider.css',
        rename: 'tiny-slider.min.css'
      }
    ],
    js: [
      {
        url: 'https://cdn.jsdelivr.net/npm/aos@latest/dist/aos.js',
        rename: 'aos.min.js'
      },
      {
        url: 'https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@latest/dist/cookieconsent.umd.min.js'
      },
      {
        url: 'https://cdn.jsdelivr.net/gh/orestbida/iframemanager@latest/dist/iframemanager.min.js'
      },
      {
        url: 'https://cdn.jsdelivr.net/npm/tiny-slider@latest/dist/min/tiny-slider.js',
        rename: 'tiny-slider.min.js'
      }
    ]
  }
}

function build(cb) {
  copyAssets(config, async (err) => {
    if (err) return cb(err)
    try {
      await downloadGoogleFonts(config.paths)
      console.log('✔ Google Fonts downloaded.')
      cb()
    } catch (fontErr) {
      console.error('✖ Error downloading Google Fonts:', fontErr)
      cb(fontErr)
    }
  })
}

exports.default = series(build)
