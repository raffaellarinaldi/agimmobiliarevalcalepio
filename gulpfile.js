const
{ series } = require('gulp'),
gulp = require('gulp'),
rename = require('gulp-rename'),
pipeline = require('readable-stream').pipeline,
download = require('gulp-download')

function copyAssets(cb) {
  const bootstrap = [
    gulp.src('./node_modules/bootstrap/scss/**')
      .pipe(gulp.dest('./src/assets/css/vendor/bootstrap')),

    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
      .pipe(gulp.dest('./src/static/assets/js'))
  ]

  Promise.all(bootstrap.map(task => new Promise((resolve, reject) => {
    task.on('finish', resolve)
    task.on('error', reject)
  })))
    .then(() => {
      console.log('Bootstrap assets copied successfully.')

  const downloads = [
    download('https://cdn.jsdelivr.net/npm/aos@latest/dist/aos.css')
      .pipe(rename('aos.min.css'))
      .pipe(gulp.dest('./src/static/assets/css')),

    download('https://cdn.jsdelivr.net/npm/aos@latest/dist/aos.js')
      .pipe(rename('aos.min.js'))
      .pipe(gulp.dest('./src/static/assets/js')),

    download('https://cdn.jsdelivr.net/npm/tiny-slider@latest/dist/tiny-slider.css')
      .pipe(rename('tiny-slider.min.css'))
      .pipe(gulp.dest('./src/static/assets/css')),

    download('https://cdn.jsdelivr.net/npm/tiny-slider@latest/dist/min/tiny-slider.js')
      .pipe(rename('tiny-slider.min.js'))
      .pipe(gulp.dest('./src/static/assets/js'))
  ]

  return Promise.all(downloads.map(task => new Promise((resolve, reject) => {
        task.on('finish', resolve)
        task.on('error', reject)
      })))
    })
    .then(() => {
      console.log('All external assets downloaded successfully.')
      cb()
    })
    .catch(err => {
      console.error('Error during assets processing:', err)
      cb(err)
    })
}

exports.default = series(copyAssets)
