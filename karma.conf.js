/**
 *
 **/

module.exports = function(config) {
	config.set({
		basePath: __dirname,
		
		frameworks: ['jasmine'],
		
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular/angular-route.js',
			'node_modules/angular/angular-sanitize.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'dist/assets/scripts/app.js',
			'test/**/*.js'
		],
		
		exclude: [
		],
		
		preprocessors: {
			'test/**/*.js': ['babel']
		},
		
		babelPreprocessor: {
			options: {
				presets: ['es2015'],
				sourceMap: 'inline'
			},
			filename: function (file) {
				return file.originalPath.replace(/\.js$/, '.es5.js');
			},
			sourceFileName: function (file) {
				return file.originalPath;
			}
		},
		
		reporters: ['progress'],
		
		port: 9876,
		
		colors: true,
		
		logLevel: config.DEBUG,
		
		autoWatch: true,
		
		browsers: ['Firefox'],
		
		singleRun: false,
		
		concurrency: Infinity
	})
}

