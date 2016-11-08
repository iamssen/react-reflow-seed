const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const buildConfig = process.env.NODE_ENV === 'production'
  ? require('./webpack.config.production')
  : require('./webpack.config.development');

module.exports = merge(baseConfig, buildConfig);