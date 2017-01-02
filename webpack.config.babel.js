'use strict'
import { join, parse } from 'path'
import CopyPlugin from 'copy-webpack-plugin'
import ServiceWorkerPlugin from 'serviceworker-webpack-plugin'
import SiteMapPlugin from 'sitemap-webpack-plugin'
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import { readdirSync } from 'fs'

const blogPosts = readdirSync('./src/posts')
const paths = [
  '',
  'about',
  'resume',
  'reading',
  ...blogPosts.map(path => `posts/${parse(path).name}`)
]


export default {
  entry: {
    main: './src/index.js'
  },
  module: {
    loaders: [
      { exclude: /node_modules/, loader: 'babel', test: /\.js$/ },
      { loader: 'json', test: /\.json$/ },
      { loaders: ['html', 'highlight', 'markdown', 'front-matter?onlyBody'], test: /\.md$/ },
      { loader: 'file', test: /\.jpg|\.png$/ }
    ]
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    path: 'public',
    publicPath: '/'
  },
  plugins: [
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
