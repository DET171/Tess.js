const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
	gulp.src('src/esm/**/*.js')
		.pipe(babel({
			presets: ['@babel/env'],
		}))
		.pipe(gulp.dest('src/cjs')),
);
