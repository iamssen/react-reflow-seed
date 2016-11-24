const browserSync = require('browser-sync');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const {apps} = require('./config');
const {appConfig} = require('./config.webpack');

const config = merge(appConfig(), {
  devtool: 'source-map',
  cache: true,
  debug: true,
  
  output: {
    path: '/',
  },
  
  entry: Object.keys(apps).reduce((obj, app) => {
    obj[app] = [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client?reload=true',
      apps[app],
    ]
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