const gulp = require('gulp');
const babel = require('gulp-babel');


function transpile(cb) {
	gulp.src('src/esm/**/*.js')
		.pipe(babel({
			presets: ['@babel/env'],
		}))
		.pipe(gulp.dest('src/cjs'));
	cb();
}

exports.default = gulp.series(transpile);
