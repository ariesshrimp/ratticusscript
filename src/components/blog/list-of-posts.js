import React from 'react'
import { Link } from 'react-router'
import Moment from 'moment'

import { createMarkup } from '../../utilities.js'
import { BlogTags } from './blog-post.js'

import CSS from './styles.scss'


export const LinkToPost = ({ post }) => {
  const { attributes: meta } = post.meta
  return <h2><Link to={`/posts/${ post.name }`}>{ meta.title }</Link></h2>
}

export const PostPreview = ({ post }) => {
  const { attributes: meta } = post.meta
  const date = Moment(meta.date).format('LLLL')

  // This can be truncated if desired
  const previewText = post.content
  return <div>
    <header className={ CSS.articleHead }>
      <LinkToPost post={ post }/>
      <h3 className={ CSS.date }>{ date }</h3>
    </header>
    <p className={ CSS.lead }>{ meta.description }</p>
    <article dangerouslySetInnerHTML={ createMarkup(previewText) }></article>
    <BlogTags tags={ meta.tags } />
  </div>
}

export const ListOfPosts = props => {
  const links = props.posts.map(post => {
    return <li key={ post.id }><PostPreview post={ post } /></li>
  })

  return <ul className={ CSS.list }>
    { links }
  </ul>
}
