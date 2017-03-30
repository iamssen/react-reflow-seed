const entry = {
  'init': [
    './src/polyfills',
  ],
  'app': './src/app',
};

const dlls = {
  dll: [
    './src/vendor',
    './src/polyfills',
  ],
};

const directory = {
  debug: 'dist-debug',
  production: 'dist',
  dll: 'dll',
  static: 'static',
};

const port = process.env.PORT || 3000;

module.exports = {
  entry,
  dlls,
  directory,
  port,
};