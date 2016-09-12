import React from 'react'

export const Head = props => {

  // Only include the highlight styles if we're on a blog post page
  const highlightMarkdownCSS = props.isBlogPost
      ? <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/atom-one-light.min.css" rel="stylesheet"/>
      : null

  return <head>
    <meta name="viewport" content="width=device-width"/>
    <title>RatticusScript</title>

    { highlightMarkdownCSS }

    <link href={ `${ props.distanceToRoot }styles.css` } rel="stylesheet"/>
  </head>
}
