const
{ series } = require('gulp'),
gulp = require('gulp'),
rename = require('gulp-rename'),
pipeline = require('readable-stream').pipeline

function copyAssets(cb) {
  gulp.src(['./node_modules/bootstrap/scss/**'])
  .pipe(gulp.dest('./src/assets/css/vendor/bootstrap'))
  gulp.src('./node_modules/aos/dist/aos.css')
  .pipe(rename('aos.min.css'))
  .pipe(gulp.dest('./src/static/assets/css'))
  gulp.src('./node_modules/tiny-slider/dist/tiny-slider.css')
  .pipe(rename('tiny-slider.min.css'))
  .pipe(gulp.dest('./src/static/assets/css'))
  gulp.src('./node_modules/aos/dist/aos.js')
  .pipe(rename('aos.min.js'))
  .pipe(gulp.dest('./src/static/assets/js'))
  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
  .pipe(gulp.dest('./src/static/assets/js'))
  gulp.src('./node_modules/tiny-slider/dist/min/tiny-slider.js')
  .pipe(rename('tiny-slider.min.js'))
  .pipe(gulp.dest('./src/static/assets/js'))
  console.log('Ok!')
  cb()
}

exports.default = series(copyAssets)
