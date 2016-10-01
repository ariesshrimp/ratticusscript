const { parse, resolve } = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },
  target: 'node',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' }
    ]
  },
}
