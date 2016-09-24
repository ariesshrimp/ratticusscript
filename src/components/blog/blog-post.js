import React from 'react'
import Moment from 'moment'
import { createMarkup, getPost } from '../../utilities.js'

import CSS from './styles.scss'


export const BlogTags = props => {
  return <p className={ `${ CSS.tags } p-category` }>tagged: { props.tags }</p>
}

export const getWebMentions = postName => {
  console.log('getting mentions', postName)
  const target = `https://ratticusscript.firebaseapp.com/posts/${ postName }`
  const mentions = request('GET', `http://webmention.io/api/mentions?target=${ target }`).getBody()
  console.log(mentions)
  console.log(typeof mentions)
  return mentions
}

export const WebMention = props => {
  console.log('webmention:', props)
  return <div key={ props.key }>
    <div className="comment-author">
      { props.mention.author && props.mention.author.name ? <p>{ props.mention.author }</p> : null }
      { props.mention.author && props.mention.author.url ? <a href={ props.mention.author.url }>{ props.mention.author }</a> : null }
      { props.mention.author && props.mention.author.photo ? <img src={ props.mention.author.photo } /> : null }
    </div>
    <p>{ props.mention.content }</p>
    <a href={ props.mention.url }>{ props.mention.url }</a>
    <time>{ props.mention.published }</time>
  </div>
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
      <h3 className={ CSS.date }><time className="dt-published" dateTime={ meta.date }>{ date }</time></h3>
    </div>

    {/* Actual blog content */}
    <div className="e-content" dangerouslySetInnerHTML={ createMarkup(post.content) }></div>

    <p>Cross posted on Medium at <a href="https://medium.com/@joefraley">https://medium.com/@joefraley</a></p>
    <BlogTags tags={ meta.tags } />
  </article>
}
