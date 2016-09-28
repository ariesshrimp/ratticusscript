import { parse, resolve } from 'path'

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: resolve(__dirname, 'index.js')
  },
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
