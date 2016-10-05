/**
* This file determines the overall structure of the base HTML for any page.
* For example, set the <head> here, append necessary <link>'s for CSS
* or <script>'s for JS, set up meta information, change the mount point for your app, etc
*/

import React from 'react'
import Helmet from 'react-helmet'
import { createMarkup } from './utilities.js'

import CSS from './styles/base.scss'

export default props => {
  // Check whether this is a blog post so that we can load specific stylesheets.
  const needsHighlight = props.locals.path.includes('posts') || props.locals.path.includes('home')
  const needsIndieAuth = props.locals.path === '/'
  return <html lang="en">
    {/* <Head needsHighlight={ needsHighlight } needsIndieAuth={ needsIndieAuth }/> */}
    <head>
      {/* description, title, key words */}
      { props.head.meta.toComponent() }
      { props.head.title.toComponent() }
      { props.head.link.toComponent() }

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width"/>

      <meta name="publisher" content="Joseph Fraley" />
      <meta name="creator" content="Joseph Fraley" />
      <meta name="author" content="Joseph Fraley" />

      {/* Favicon stuff / Progressive web app stuff */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />

      {/* IndieAuth data */}
      <link key="1" rel="me" href="https://www.twitter.com/joseph_fraley"/>
      <link key="2" rel="me" href="https://www.github.com/joefraley" />
      <link key="3" rel="me" href="sms:+15033671627" />
      <link key="4" rel="me" href="mailto:jose.fraley@gmail.com" />
      <link rel="webmention" href="https://webmention.io/ratticusscript.firebaseapp.com/webmention" />

      <link href="/styles.css" rel="stylesheet"/>
    </head>
    <body>
        <main id="content" dangerouslySetInnerHTML={ props.reactApp } ></main>
        <script src="/index.js"></script>
    </body>
  </html>
}
