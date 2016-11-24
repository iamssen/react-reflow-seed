const webpack = require('webpack');
const merge = require('webpack-merge');

const {apps} = require('./config');
const {appConfig} = require('./config.webpack');

module.exports = merge(appConfig(), {
  devtool: 'source-map',
  cache: true,
  debug: true,
  
  output: {
    path: './dist-debug',
  },
  
  entry: apps,
});