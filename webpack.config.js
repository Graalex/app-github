/**
 *
 **/

import path from 'path';
import webpack from 'webpack';

const isDebug = process.env.NODE_ENV !== 'production';

export default {
	context: path.resolve(__dirname, 'app'),

	entry: {
		app: './app.js',
		vendor: [
			'angular',
			'angular-route',
			'angular-sanitize',
			'ng-showdown'
		]
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname + '/dist/assets/scripts'),
		publicPath: '/'
	},

	resolve: {
		moduleDirectories: ['node_modules'],
		extensions: ['', '.js']
	},

	devtool: isDebug ? 'inline-source-map' : 'source-map',

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['ng-annotate', 'babel?presets[]=es2015']
			},
			{
				test: /\.jade$/,
				loader: 'pug'
			}
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
	]
};

