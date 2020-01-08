const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	mode: 'development',
	entry: ["@babel/polyfill",path.resolve(__dirname, '../src/main.js')],
	output: {
		filename: '[name].[hash:8].js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				use:{
						loader:'babel-loader',
						options:{
								presets:['@babel/preset-env']
						}
				},
				exclude:/node_modules/
	 	},					
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
			},
			{
				test: /\.(jpe?g|png|gif)$/i, //图片文件
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							fallback: {
								loader: 'file-loader',
								options: {
									name: 'img/[name].[hash:8].[ext]'
								}
							}
						}
					}
				]
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							fallback: {
								loader: 'file-loader',
								options: {
									name: 'media/[name].[hash:8].[ext]'
								}
							}
						}
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							fallback: {
								loader: 'file-loader',
								options: {
									name: 'fonts/[name].[hash:8].[ext]'
								}
							}
						}
					}
				]
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[hash:8].css',
			chunkFilename: '[id].css'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html')
		}),
		new CleanWebpackPlugin()
	]
}
