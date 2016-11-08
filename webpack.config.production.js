const webpack = require('webpack');

module.exports = {
  output: {
    path: './dist',
  },
  
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
}
