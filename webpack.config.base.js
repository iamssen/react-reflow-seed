const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const copyFiles = [];

copyFiles.push({
  from: 'src.static',
});

const libs = {
  'polyfills': './src/polyfills',
  'vendor': './src/vendor',
};

const apps = {
  'app': './src/app',
};

module.exports = {
  target: 'web',
  
  entry: Object.assign({}, libs, apps),
  sourcePath: './src',
  
  output: {
    path: './dist.dev',
    publicPath: '/',
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].chunk.js',
  },
  
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'shared',
      chunks: Object.keys(apps),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: Object.keys(libs).reverse(),
      minChunks: Infinity,
    }),
    new CopyWebpackPlugin(copyFiles),
    new ExtractTextPlugin("[name].css", {
      allChunks: true,
    }),
  ],
  
  resolve: {
    root: [path.join(__dirname, 'src')],
    extensions: ['', '.js', '.jsx', '.json'],
  },
  
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties'],
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.txt$/,
        loader: 'raw'
      },
      {
        test: /\.md$/,
        loaders: ['raw', 'markdown']
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },
  
  postcss: () => [
    autoprefixer,
    precss,
  ],
  
  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0,
  },
}