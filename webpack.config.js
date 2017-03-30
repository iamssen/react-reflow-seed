const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');
const {CheckerPlugin} = require('awesome-typescript-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const rimraf = require('rimraf');

const {entry, dlls, directory} = require('./config');
const src = path.join(__dirname, 'src');

const baseConfig = () => ({
  target: 'web',
  
  output: {
    publicPath: '/',
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].chunk.js',
  },
  
  plugins: [
    new CheckerPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: fs.readdirSync('src/shared')
             .map(dir => 'src/shared/' + dir)
             .filter(dir => fs.statSync(dir).isDirectory())
             .reduce((alias, dir) => {
               alias[path.basename(dir)] = path.resolve(__dirname, dir);
               return alias;
             }, {}),
  },
  
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: src,
        use: [
          {loader: 'awesome-typescript-loader'},
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [
          {loader: 'source-map-loader'},
        ],
      },
      {
        test: /\.html$/,
        include: src,
        use: [
          {loader: 'raw-loader'},
        ],
      },
      {
        test: /\.txt$/,
        include: src,
        use: [
          {loader: 'raw-loader'},
        ],
      },
      {
        test: /\.md$/,
        include: src,
        use: [
          {loader: 'raw-loader'},
          {loader: 'markdown-loader'},
        ],
      },
    ],
  },
});

const appConfig = () => merge(baseConfig(), {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'shared',
      chunks: Object.keys(entry),
    }),
    ...Object.keys(dlls).map(name => {
      return new webpack.DllReferencePlugin({
        context: '.',
        manifest: require(`./${directory.dll}/${name}-manifest.json`),
      });
    }),
  ],
});

const buildDLL = () => merge(baseConfig(), {
  devtool: 'source-map',
  
  output: {
    path: path.join(__dirname, directory.dll),
    library: '[name]_lib',
  },
  
  entry: dlls,
  
  plugins: [
    new webpack.DllPlugin({
      path: `./${directory.dll}/[name]-manifest.json`,
      name: '[name]_lib',
    }),
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false,
    //  },
    //}),
  ],
});

const buildProduction = () => merge(appConfig(), {
  output: {
    path: path.join(__dirname, directory.production),
  },
  
  entry,
  
  plugins: [
    new CopyWebpackPlugin([
      {from: directory.static},
      {from: directory.dll, ignore: ['*.js.map', '*-manifest.json']},
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});

const buildDev = () => merge(appConfig(), {
  devtool: 'source-map',
  cache: true,
  
  output: {
    path: path.join(__dirname, directory.debug),
  },
  
  entry,
});

const serveConfig = (port) => {
  return merge(appConfig(), {
    // devtool: 'cheap-module-source-map', // slow + update source map with hmr
    devtool: 'cheap-module-eval-source-map', // fast + no update source map with hmr
    cache: true,
    
    output: {
      path: path.join(__dirname),
    },
    
    entry: Object.keys(entry).reduce((obj, name) => {
      obj[name] = [
        `webpack-hot-middleware/client?http://localhost:${port}`,
        `webpack/hot/only-dev-server`,
      ].concat(Array.isArray(entry[name]) ? entry[name] : [entry[name]]);
      return obj;
    }, {}),
    
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
  });
};

module.exports = ({action, port}) => new Promise((resolve, reject) => {
  switch (action) {
    case 'build.production':
      rimraf(directory.production, err => err ? reject(err) : resolve());
      break;
    case 'build.dev':
      rimraf(directory.debug, err => err ? reject(err) : resolve());
      break;
    case 'build.dll':
      rimraf(directory.dll, err => err ? reject(err) : resolve());
      break;
    case 'serve':
      resolve();
  }
}).then(() => {
  switch (action) {
    case 'build.production':
      return buildProduction();
    case 'build.dev':
      return buildDev();
    case 'build.dll':
      return buildDLL();
    case 'serve':
      return serveConfig(port);
  }
});