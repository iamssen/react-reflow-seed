const browserSync = require('browser-sync');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const {entry} = require('./config');
const {appConfig} = require('./config.webpack');

const config = merge(appConfig(), {
  devtool: 'source-map',
  cache: true,
  debug: true,
  
  output: {
    path: '/',
  },
  
  entry: Object.keys(entry).reduce((obj, name) => {
    obj[name] = [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client?reload=true',
    ].concat(Array.isArray(entry[name]) ? entry[name] : [entry[name]])
    return obj;
  }, {}),
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.OldWatchingPlugin(),
  ],
});

const bundler = webpack(config);

browserSync({
  port: process.env.PORT || 3000,
  open: false,
  
  server: {
    baseDir: ['dll', 'static'],
    
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,
        stats: {colors: true},
      }),
      
      webpackHotMiddleware(bundler),
    ]
  },
  
  files: [
    './dll',
    './static',
  ],
});
