import React from 'react'
import Moment from 'moment'
import { createMarkup, getPost } from '../../utilities.js'

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
    <h3 className={ CSS.date }>
      <time dateTime={ published }>{ Moment(published).calendar() }</time>
    </h3>
  </div>
}

export const ListOfMentions = props => {
  return <ul className={ CSS.mentions }>
    { getWebMention(props.postName)
        .map((mention, index) => {
          return <WebMention mention={ mention } key={ index }/>
        })
    }
  </ul>
}

export const BlogPost = props => {
  const post = getPost(props.params.id)
  const { attributes: meta } = post.meta
  const date = Moment(meta.date).calendar()

  return <article className="h-entry">
    {/* Blog metadata */}
    <div className={ CSS.articleHead }>
      <a className="u-url" href={`https://ratticusscript.firebaseapp.com/posts/${props.params.id}`} style={{display: 'none'}}></a>
      <a rel="author" className="p-author h-card" href="https://ratticusscript.firebaseapp.com/" style={{display:'none'}}>{ meta.author }</a>
      <h1 className="p-name">{ meta.title }</h1>
      <h3 className={ CSS.date }>
        <time className="dt-published" dateTime={ meta.date }>{ date }</time>
      </h3>
    </div>

    {/* Actual blog content */}
    <div className="e-content" dangerouslySetInnerHTML={ createMarkup(post.content) }></div>

    <p>Cross posted on Medium at <a href="https://medium.com/@joefraley">https://medium.com/@joefraley</a></p>
    <BlogTags tags={ meta.tags } />
    <h2>Mentions on the Web</h2>
    <ListOfMentions postName={ props.params.id }/>
  </article>
}
