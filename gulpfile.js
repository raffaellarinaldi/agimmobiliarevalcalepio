const
{ series } = require('gulp'),
gulp = require('gulp'),
rename = require('gulp-rename'),
chmod = require('gulp-chmod'),
pipeline = require('readable-stream').pipeline

function copyAssets(cb) {
  // Coming with next version
  console.log('Ok!')
  cb()
}

function copyUtil(cb) {
	gulp.src([
		'../_src/util/libraries/minifier.js'
		])
		.pipe(chmod(0o444))
		.pipe(gulp.dest('./src/util/libraries'))
	gulp.src('../_src/util/.eleventy.js', { dot: true })
		.pipe(chmod(0o444))
		.pipe(gulp.dest('./src/util'))
	console.log('Ok!')
	cb()
}

exports.default = series(copyUtil)
