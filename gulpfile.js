const gulp = require('gulp');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');
const babelrc = require('./.babelrc.json');
const { exec } = require('child_process');

async function transpile(cb) {
	await new Promise((resolve) => {
		gulp.src('./src/esm/**/*.js')
			.pipe(babel(babelrc))
			.pipe(gulp.dest('./src/cjs'))
			.on('finish', resolve);
	});
	exec('bash echoJSTypes.sh', (err, stdout, stderr) => {
		if (err) {
			cb(err);
			throw err;
		}
		if (stdout) console.log(stdout);
		if (stderr) {
			console.error(stderr);
			cb(err);
		}
	});
	cb();
}

async function doc(cb) {
	await new Promise((resolve, reject) => {
		exec('npx jsdoc -c ./jsdoc.json -R ./README.md && echo tess.js.org > docs/CNAME', (err, stdout, stderr) => {
			if (err) {
				cb(err);
				reject(err);
				throw err;
			}
			if (stdout) console.log(stdout);
			if (stderr) {
				console.error(stderr);
				reject(err);
				cb(err);
			}
			resolve();
		});
	});
	gulp.src('./docs/scripts/**/*.js')
		.pipe(terser())
		.pipe(gulp.dest('./docs/scripts/'));
	gulp.src('./docs/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('./docs/'));
	cb();
}

async function bundle(cb) {
	await new Promise((resolve, reject) => {
		exec(['npx esbuild browser/base.js --bundle --outfile=browser/bundle.js --format=iife'].join(' && '), (err, stdout, stderr) => {
			if (err) {
				cb(err);
				reject(err);
				throw err;
			}
			if (stdout) console.log(stdout);
			if (stderr) {
				console.error(stderr);
				reject(err);
				cb(err);
			}
			resolve();
		});
	});
	cb();
}

exports.doc = doc;
exports.transpile = transpile;
exports.bundle = bundle;
