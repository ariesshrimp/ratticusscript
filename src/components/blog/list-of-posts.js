import React from 'react'
import { Link } from 'react-router'
import Moment from 'moment'

import { createMarkup } from '../../utilities.js'
import { BlogTags } from './blog-post.js'

import CSS from './styles.scss'


export const LinkToPost = ({ post }) => {
  const { attributes: meta } = post.meta
  const date = Moment(meta.date).format('LLLL')
  return <Link to={`/posts/${ post.name }`} className={ CSS.listItemTitle }>{ date }</Link>
}

export const PostPreview = ({ post }) => {
  // This can be truncated if desired
  const previewText = post.content
  return <div>
    <LinkToPost post={ post }/>
    <article dangerouslySetInnerHTML={ createMarkup(previewText) }></article>
    <BlogTags tags={ post.meta.attributes.tags } />
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
