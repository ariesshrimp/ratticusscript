'use strict'
import { createMarkup, getPost, nextPost } from '../../utilities'
import Helmet from 'react-helmet'
import Moment from 'moment'
import { MoreButton } from './more-button'
import React from 'react'

export const BlogTags = ({ tags }) => {
  return <p>tagged: { tags }</p>
}

export const BlogPost = ({ params }) => {
  const post = getPost(params.date)
  const { attributes: meta } = post.meta
  const date = Moment(meta.date).calendar()
  const description = meta.description

  return <article>
    <Helmet
      title={ `${meta.title} | RatticusScript` }
      meta={[{
        content: description,
        name: 'description'
      }]}
    />

    <div>
      <a href={ `https://ratticusscript.com/posts/${params.id}` } style={{ display: 'none' }}></a>
      <a rel="author" href="https://ratticusscript.com/" style={{display: 'none'}}>{ meta.author }</a>
      <h1>{ meta.title }</h1>
      <h3>
        <time dateTime={ meta.date }>{ date }</time>
      </h3>
    </div>

    <div dangerouslySetInnerHTML={ createMarkup(post.content) }></div>
    <BlogTags tags={ meta.tags } />
    <MoreButton post={ nextPost(post) } type="next"/>
  </article>
}
