/**
 *
 **/

import path from 'path';

const isDebug = process.env.NODE_ENV !== 'production';

export default {
	context: path.resolve(__dirname, 'app'),
	
	entry: './app.js',
	
	output: {
		filename: 'app.js',
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
	
	]
};

