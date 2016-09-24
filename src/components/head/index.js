import React from 'react'

export const Head = props => {
  // TODO:jmf be smarter about how this works: just add a meta property to the
  // front-matter of any post that contains code in need of highlights

  // Only include the highlight styles if we're on a blog post page
  const highlightMarkdownCSS = props.needsHighlight
      ? <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/atom-one-light.min.css" rel="stylesheet"/>
      : null

  const indieAuthLinks = props.needsIndieAuth
    ? [
      <link key="1" rel="me" href="https://www.twitter.com/joseph_fraley"/>,
      <link key="2" rel="me" href="https://www.github.com/joefraley" />,
      <link key="3" rel="me" href="sms:+15033671627" />,
      <link key="4" rel="me" href="mailto:jose.fraley@gmail.com" />
    ]
    : null

  return <head>
    <meta name="viewport" content="width=device-width"/>
    <title>RatticusScript</title>

    { highlightMarkdownCSS }
    { indieAuthLinks }
    <link rel="webmention" href="https://webmention.io/ratticusscript.firebaseapp.com/webmention" />

    <link href="/styles.css" rel="stylesheet"/>
  </head>
}
