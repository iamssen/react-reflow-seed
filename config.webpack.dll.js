const webpack = require('webpack');
const merge = require('webpack-merge');

const {libs} = require('./config');
const {webpackConfig} = require('./config.webpack');

module.exports = merge(webpackConfig(), {
  devtool: 'source-map',
  
  output: {
    path: './dll',
    library: '[name]_lib',
  },
  
  entry: libs,
  
  plugins: [
    new webpack.DllPlugin({
      path: './dll/[name]-manifest.json',
      name: '[name]_lib',
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
  ],
});