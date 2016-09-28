import React from 'react'
import Moment from 'moment'
import { createMarkup, getPost } from '../../utilities.js'
import Helmet from 'react-helmet'

import CSS from './styles.scss'

export const BlogTags = props => {
  return <p className={ `${ CSS.tags } p-category` }>tagged: { props.tags }</p>
}

export const getWebMention = postName => {
  const mentions = require(`../../../utilities/webmentions/posts/${ postName }.json`)
  return mentions.links
}

export const getAllWebMentions = () => {
  const mentions = require.context(`../../../utilities/webmentions/posts`)
  return mentions.keys().map(mention => mentions(mention).links)
}

export const WebMention = props => {
  const { data } = props.mention
  const { author, content, url, published } = data
  return <div className={ CSS.mention }>
    <div className={ CSS.commentAuthor }>
      { data.author && author.photo ? <img className={ CSS.authorImage } src={ author.photo } /> : null }
      { data.author && author.name ? <a href={ author.url } className={ CSS.authorName }>{ author.name }</a> : null }
    </div>
    <p>{ content }</p>
    <a href={ url }>Original post here</a>
    <h4 className={ CSS.date }>
      <time dateTime={ published }>{ Moment(published).calendar() }</time>
    </h4>
  </div>
}

export const ListOfMentions = props => {
  const mentions = getWebMention(props.postName)
  if (mentions.length) {
    return <ul className={ CSS.mentions }>
      <h2>Mentions on the Web:</h2>
      {mentions.map((mention, index) => {
          return <WebMention mention={ mention } key={ index }/>
      })}
    </ul>
  }
  else {
    return null
  }
}

export const BlogPost = props => {
  const post = getPost(props.params.id)
  const { attributes: meta } = post.meta
  const date = Moment(meta.date).calendar()
  const description = meta.description

  return <article className="h-entry">
    {/* Update the document head to reflect this page title and description */}
    <Helmet
      title={ `${ meta.title } | RatticusScript` }
      meta={[
        { name: 'description', content: description }
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/atom-one-light.min.css' }
      ]}
    />

    {/* Blog metadata */}
    <div className={ CSS.articleHead }>
      <a className="u-url" href={`https://ratticusscript.firebaseapp.com/posts/${ props.params.id }`} style={{display: 'none'}}></a>
      <a rel="author" className="p-author h-card" href="https://ratticusscript.firebaseapp.com/" style={{display:'none'}}>{ meta.author }</a>
      <h1 className="p-name">{ meta.title }</h1>
      <h3 className={ CSS.date }>
        <time className="dt-published" dateTime={ meta.date }>{ date }</time>
      </h3>
    </div>

    {/* Actual blog content */}
    <div className="e-content" dangerouslySetInnerHTML={ createMarkup(post.content) }></div>

    {
      meta.externalLink
      ? <p><a href={ meta.externalLink }>Cross posted on Medium</a></p>
      : null
    }

    <BlogTags tags={ meta.tags } />

    {/* XXX: commented out for now because
      it's really hard to post webmentions,
      and I have to learn about XSS attacks
      Webmentions */}
    {/* <ListOfMentions postName={ props.params.id }/> */}
  </article>
}
