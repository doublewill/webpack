const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);
const webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', path.join(__dirname, '../src/main.js')],
  output: {
    filename: '[name].[hash:8].js',
    path: path.join(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', 'scss'],
    alias: {
      '@': resolve('src'),
    },
  },
  devServer: {
    hot: true,
    open: true,
    host: HOST,
    port: 8000,
    clientLogLevel: 'warning',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
                  name: 'img/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
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
                  name: 'media/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
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
                  name: 'fonts/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
};
