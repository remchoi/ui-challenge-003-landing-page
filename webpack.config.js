const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

module.exports = {
  devServer: {
    port: config.webpackPort
  },
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
