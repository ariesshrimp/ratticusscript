import React from 'react'

export const Head = props => {
  // TODO:jmf be smarter about how this works: just add a meta property to the
  // front-matter of any post that contains code in need of highlights

  // Only include the highlight styles if we're on a blog post page
  const highlightMarkdownCSS = props.needsHighlight
      ? <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/atom-one-light.min.css" rel="stylesheet"/>
      : null

  return <head>
    <meta name="viewport" content="width=device-width"/>
    <title>RatticusScript</title>

    { highlightMarkdownCSS }

    <link href="/styles.css" rel="stylesheet"/>
  </head>
}
