/**
 *
 **/

module.exports = function(config) {
	config.set({
		basePath: __dirname,

		frameworks: ['jasmine'],

		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-route/angular-route.js',
			'node_modules/angular-sanitize/angular-sanitize.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'dist/assets/scripts/vendor.js',
			'dist/assets/scripts/app.js',
			'test/test-all.js'
		],

		exclude: [
		],

		preprocessors: {
			'test/test-all.js': ['webpack']
		},

		webpack: {
			module: {
				loaders: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'babel'
					}
				]
			},
			watch: true
		},

		webpackMiddleware: {
			noInfo: true
		},

		reporters: ['progress'],

		port: 9876,

		colors: true,
		
		autoWatch: true,

		browsers: ['PhantomJS'],

		singleRun: false,

		concurrency: Infinity
	})
}

