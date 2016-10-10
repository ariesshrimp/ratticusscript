import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import SiteMapPlugin from 'sitemap-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ServiceWorkerPlugin from 'serviceworker-webpack-plugin'

import { readdirSync } from 'fs'
import { join, parse } from 'path'

const blogPosts = readdirSync('./src/posts')
const paths = [
  '',
  'about',
  'resume',
  'reading',
  ...blogPosts.map(path => `posts/${ parse(path).name }`)
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
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.md$/, loaders: ['html', 'highlight', 'markdown', 'front-matter?onlyBody'] },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css-loader?minify&modules&importLoaders=1&localIdentName=[local]::[path]!sass?sourceMap') },
      { test: /\.(woff|otf|png)$/, loader: 'url' },
      { test: /\.jpg$/, loader: 'file' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new StaticSiteGeneratorPlugin('main', paths, null),
    new SiteMapPlugin('https://ratticusscript.firebaseapp.com/', paths, 'sitemap.xml'),
    new CopyPlugin([
      { from: 'src/robots.txt' },
      { from: 'src/pages/resume/resume.pdf' },
      { from: 'src/assets/favicons' }
    ]),
    new ServiceWorkerPlugin({
      entry: join(__dirname, 'src/ServiceWorker.js')
    })
  ]
}
