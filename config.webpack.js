const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {entry, dlls} = require('./config');

const webpackConfig = () => ({
  target: 'web',
  sourcePath: './src',
  
  output: {
    // path: './dist',
    publicPath: '/',
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].chunk.js',
  },
  
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
  ],
  
  resolve: {
    root: ['./src'],
    extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: fs.readdirSync('src/shared')
             .map(dir => 'src/shared/' + dir)
             .filter(dir => fs.statSync(dir).isDirectory())
             .reduce((alias, dir) => {
               alias[path.basename(dir)] = path.resolve(__dirname, dir);
               return alias;
             }, {}),
  },
  
  module: {
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts'
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
})

const appConfig = () => merge(webpackConfig(), {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'shared',
      chunks: Object.keys(entry),
    }),
    new ExtractTextPlugin("[name].css", {
      allChunks: true,
    }),
    ...Object.keys(dlls).map(name => {
      return new webpack.DllReferencePlugin({
        context: '.',
        manifest: require(`./dll/${name}-manifest.json`),
      });
    }),
  ],
});

module.exports = {webpackConfig, appConfig};