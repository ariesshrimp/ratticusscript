import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { readdirSync } from 'fs'
import { parse } from 'path'

const blogPosts = readdirSync('./src/posts')
const paths = [
  '/',
  '/about',
  '/resume',
  '/reading',
  ...blogPosts.map(path => `/posts/${ parse(path).name }`)
]


module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'index.js',
    path: 'public',
    libraryTarget: 'umd',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.md$/, loaders: ['html', 'highlight', 'markdown', 'front-matter?onlyBody'] },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css-loader?modules&importLoaders=1&localIdentName=[local]__[name]__[path]___[hash:base64:5]!sass') },
      { test: /\.(woff|otf)$/, loader: 'url' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new StaticSiteGeneratorPlugin('main', paths, null)
  ]
}
