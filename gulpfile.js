const gulp = require('gulp');
const babel = require('gulp-babel');
const terser = require('gulp-terser');

function transpile(cb) {
	gulp.src('./src/esm/**/*.js')
		.pipe(babel({
			presets: ['@babel/env'],
		}))
		.pipe(gulp.dest('./src/cjs'));
	cb();
}

function minify(cb) {
	gulp.src('./browser/bundle.js')
		.pipe(terser())
		.pipe(gulp.dest('./browser/dist'));
	cb();
}

exports.default = gulp.parallel(transpile, minify);
