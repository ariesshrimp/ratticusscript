/**
* This file determines the overall structure of the base HTML for any page.
* For example, set the <head> here, append necessary <link>'s for CSS
* or <script>'s for JS, set up meta information, change the mount point for your app, etc
*/

import React from 'react'

import { createMarkup } from './utilities.js'
import { Head } from './components/head/index.js'

import CSS from './styles/base.scss'

export default props => {
  // Decide how many '../' to add to the path to CSS based on this iterations'
  // depth in the file hierarchy.
  const distanceToRoot = props.locals.path !== '/'
    ? props.locals.path.split('/').slice(1).map(level => '../').join('')
    : '/'

  // Check whether this is a blog post so that we can load specific stylesheets.
  const isBlogPost = props.locals.path.includes('posts')

  return <html lang="en">
    <Head distanceToRoot={ distanceToRoot } isBlogPost={ isBlogPost }/>
    <body>
        <main id="content" dangerouslySetInnerHTML={ props.reactApp } ></main>
    </body>
  </html>
}
