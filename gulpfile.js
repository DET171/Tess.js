const gulp = require('gulp');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');

function transpile(cb) {
	gulp.src('./src/esm/**/*.js')
		.pipe(babel({
			presets: ['@babel/env'],
		}))
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

function minifyBundle(cb) {
	gulp.src('./browser/bundle.js')
		.pipe(terser())
		.pipe(gulp.dest('./browser/dist'));
	cb();
}

exports.minify = gulp.parallel(minifyDocsJS, minifyDocsHTML, minifyBundle);
exports.transpile = gulp.parallel(transpile);
