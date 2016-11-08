const baseConfig = require('./webpack.config.base');

module.exports = {
  devtool: 'source-map',
  cache: true,
  debug: true,
  
  devServer: {
    historyApiFallback: true,
    watchOptions: {aggregateTimeout: 300, poll: 1000},
    contentBase: baseConfig.sourcePath,
    outputPath: baseConfig.output.publicPath,
    host: '0.0.0.0',
    port: 4200,
  },
}
