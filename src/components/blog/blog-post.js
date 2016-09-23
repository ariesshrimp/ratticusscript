import React from 'react'
import Moment from 'moment'

import { createMarkup, getPost } from '../../utilities.js'

import CSS from './styles.scss'

export const BlogTags = props => {
  return <p className={ CSS.tags }>tagged: { props.tags }</p>
}

export const BlogPost = props => {
  const post = getPost(props.params.id)
  const { attributes: meta } = post.meta
  const date = Moment(meta.date).calendar()

  return <article>
    {/* Blog metadata */}
    <div className={ CSS.articleHead }>
      <h1>{ meta.title }</h1>
      <h3 className={ CSS.date }><time>{ date }</time></h3>
    </div>

    {/* Actual blog content */}
    <div dangerouslySetInnerHTML={ createMarkup(post.content) }></div>

    <p>Cross posted on Medium at <a href="https://medium.com/@joefraley">https://medium.com/@joefraley</a></p>
    <BlogTags tags={ meta.tags } />
  </article>
}
