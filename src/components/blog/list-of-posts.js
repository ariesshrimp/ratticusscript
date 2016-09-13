import React from 'react'
import { Link } from 'react-router'
import Moment from 'moment'

import { createMarkup } from '../../utilities.js'
import { BlogTags } from './blog-post.js'

import CSS from './styles.scss'


export const LinkToPost = ({ post }) => {
  const { attributes: meta } = post.meta
  const date = Moment(meta.date).format('LLLL')
  return <h3  className={ CSS.listItemTitle }><Link to={`/posts/${ post.name }`}>{ date }</Link></h3>
}

export const PostPreview = ({ post }) => {
  // This can be truncated if desired
  const previewText = post.content
  return <div>
    <LinkToPost post={ post }/>
    <p className={ CSS.lead }>{ post.meta.attributes.description }</p>
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
