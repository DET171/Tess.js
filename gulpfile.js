const gulp = require('gulp');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');
const babelrc = require('./.babelrc.json');

function transpile(cb) {
	gulp.src('./src/esm/**/*.js')
		.pipe(babel(babelrc))
		.pipe(gulp.dest('./src/cjs'));
	cb();
}

function minifyDocsJS(cb) {
	gulp.src('./docs/scripts/**/*.js')
		.pipe(terser())
		.pipe(gulp.dest('./docs/scripts/'));
	cb();
}

function minifyDocsHTML(cb) {
	gulp.src('./docs/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('./docs/'));
	cb();
}

function bundle(cb) {
	gulp.src('./browser/bundle.js')
		.pipe(terser())
		.pipe(gulp.dest('./browser/'));
	cb();
}

exports.minify = gulp.parallel(minifyDocsJS, minifyDocsHTML, bundle);
exports.transpile = gulp.parallel(transpile);
