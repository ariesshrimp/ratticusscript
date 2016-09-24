import React from 'react'
import { Link } from 'react-router'
import Moment from 'moment'

import { createMarkup, sortPosts } from '../../utilities.js'
import { BlogTags } from './blog-post.js'

import CSS from './styles.scss'


export const LinkToPost = ({ post }) => {
  const { attributes: meta } = post.meta
  return <Link to={`/posts/${ post.name }`} className={ CSS.title }>{ meta.title }</Link>
}

export const FullPost = ({ post }) => {
  const { attributes: meta } = post.meta
  const date = Moment(meta.date).format('LLLL')

  // This can be truncated if desired
  const previewText = post.content
  return <div>
    <header className={ CSS.articleHead }>
      <h2 className={ CSS.bigTitle }><LinkToPost post={ post }/></h2>
      <h3 className={ CSS.date }>{ date }</h3>
    </header>
    <p className={ CSS.lead }>{ meta.description }</p>
    <article dangerouslySetInnerHTML={ createMarkup(previewText) }></article>

    <p>Cross posted on Medium at <a href="https://medium.com/@joefraley">https://medium.com/@joefraley</a></p>
    <BlogTags tags={ meta.tags } />
  </div>
}

export const PostPreview = ({ post }) => {
  const { attributes: meta } = post.meta
  const date = Moment(meta.date).format('LLLL')

  // This can be truncated if desired
  const previewText = post.content
  return <div className={ CSS.preview }>
    <header className={ CSS.previewHead }>
      <h3><LinkToPost post={ post }/></h3>
      <h4 className={ CSS.date }>{ date }</h4>
    </header>
    <p>{ meta.description }</p>
    <BlogTags tags={ meta.tags } />
  </div>
}

export const ListOfPosts = props => {
  const links = props.posts.map((post, index) => {
    if (index === 0) {
      return <li key={ post.id }><FullPost post={ post } /></li>
    }
    else {
      return <li key={ post.id }><PostPreview post={ post } /></li>
    }
  })

  return <ul className={ CSS.list }>
    { links }
  </ul>
}
