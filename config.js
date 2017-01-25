const entry = {
  'init': [
    './src/polyfills'
  ],
  'app': './src/app'
}

const dlls = {
  dll: [
    './src/vendor',
    './src/polyfills',
  ]
}

module.exports = {entry, dlls};