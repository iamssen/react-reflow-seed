const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const {entry} = require('./config');
const {appConfig} = require('./config.webpack');

module.exports = merge(appConfig(), {
  output: {
    path: './dist',
  },
  
  entry,
  
  plugins: [
    new CopyWebpackPlugin([
      {from: 'static'},
      {from: 'dll'},
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
});