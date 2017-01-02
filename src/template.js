/**
* This file determines the overall structure of the base HTML for any page.
* For example, set the <head> here, append necessary <link>'s for CSS
* or <script>'s for JS, set up meta information, change the mount point for your app, etc
*/
'use strict'
import Helmet from 'react-helmet'
import React from 'react'

export default props => {
  return <html lang="en">
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
    </head>
    <body>
        <div id="content" dangerouslySetInnerHTML={ props.reactApp } ></div>
        <script src="/index.js"></script>
    </body>
  </html>
}
