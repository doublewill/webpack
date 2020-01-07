const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, '../src/main.js'),
	output: {
		filename: '[name].[hash:8].js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', {
					loader: 'postcss-loader',
					options: {
						plugins: [require('autoprefixer')]
					}
				}, 'less-loader']
			},			
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].hash.css',
			chunkFilename: '[id].css'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html')
		}),
		new CleanWebpackPlugin()
	]
}
