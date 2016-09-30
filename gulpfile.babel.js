/**
 *
 **/

import gulp from 'gulp';
import pug from 'gulp-pug';
import gls from  'gulp-live-server';
import stylus from 'gulp-stylus';
import stylint from 'gulp-stylint';
import sourcemap from 'gulp-sourcemaps';
import gulpIf from 'gulp-if';
import cssnano from 'gulp-cssnano';
import gutil from 'gulp-util';
import eslint from 'gulp-eslint';
import sequence from 'run-sequence';
import autoprefixer from 'autoprefixer-stylus';
import del from 'del';
import webpack from 'webpack';
import wpConf from './webpack.config.js';

const isDebug = process.env.NODE_ENV !== 'production';

gulp.task('clean', () => {
	return del('dist/**/*');
});

gulp.task('page', () => {
	return gulp.src('app/index.jade')
		.pipe(pug({
			pretty: isDebug ? true : false
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('stylus:lint', () => {
	return gulp.src('app/assets/styles/*.styl')
		.pipe(stylint({
			reporter: 'stylint-stylish',
			reporterOptions: {verbose: true}
		}))
		.pipe(stylint.reporter());
});

gulp.task('styles', () => {
	return gulp.src('app/assets/styles/*.styl')
		.pipe(gulpIf(isDebug, sourcemap.init()))
		.pipe(stylus({
			compress: isDebug ? false : true,
			use: [
				autoprefixer()
			]
		}))
		.pipe(gulpIf(!isDebug, sourcemap.init()))
		.pipe(gulpIf(!isDebug, cssnano()))
		.pipe(gulpIf(isDebug, sourcemap.write(), sourcemap.write('.')))
		.pipe(gulp.dest('dist/assets/styles'));
});

gulp.task('scripts:lint', () => {
	return gulp.src('**/*.js')
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('scripts', (calback) => {
	if(!isDebug) {
		wpConf.plugins = wpConf.plugins.concat([
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, output: {comments: false}})
		]);
	}

	webpack(wpConf, (err, stats) => {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString());
	});
	calback();
});

gulp.task('resources', () => {
	return gulp.src('app/assets/icons/**/*')
		.pipe(gulp.dest('dist/assets/icons'))
});

gulp.task('build', () => {
	return sequence('resources', 'styles', 'scripts', 'page');
});

gulp.task('start', () => {
	let server = gls.static('dist');
	server.start();
	gulp.watch(['dist/**/*.css', 'dist/**/*.html', 'dist/**/*.js'], function (file) {
		server.notify.apply(server, [file]);
	});
});

