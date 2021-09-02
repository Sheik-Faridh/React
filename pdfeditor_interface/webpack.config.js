const path = require('path');
const { getHTMLContent } = require('./src/html');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: ['react-hot-loader/patch', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack', 'url-loader'],
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							mimetype: 'image/png',
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
	},
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			templateContent: getHTMLContent,
			filename: 'index.html',
		}),
	],
};

module.exports = config;
