'use strict'
import { createMarkup } from '../../utilities'
import { BlogTags } from './blog-post'
import { Link } from 'react-router'
import Moment from 'moment'
import React from 'react'

export const LinkToPost = ({ post }) => {
  const { attributes: meta } = post.meta
  return <Link to={ `/posts/${post.name}` }>{ meta.title }</Link>
}

export const FullPost = ({ post }) => {
  const { attributes: meta } = post.meta
  const date = Moment(meta.date).format('LLLL')

  const previewText = post.content
  return <div>
    <header>
      <h2><LinkToPost post={ post }/></h2>
      <h3>{ date }</h3>
    </header>
    <p>{ meta.description }</p>
    <article dangerouslySetInnerHTML={ createMarkup(previewText) }></article>
    <BlogTags tags={ meta.tags } />
  </div>
}

export const PostPreview = ({ post }) => {
  const { attributes: meta } = post.meta
  const date = Moment(meta.date).format('LLLL')
  return <div>
    <header>
      <h3><LinkToPost post={ post }/></h3>
      <h4>{ date }</h4>
    </header>
    <p>{ meta.description }</p>
    <BlogTags tags={ meta.tags } />
  </div>
}

export const ListOfPosts = ({ posts }) => {
  const links = posts.map((post, index) => {
    if (index === 0) return <li key={ post.id }><FullPost post={ post } /></li>
    else return <li key={ post.id }><PostPreview post={ post } /></li>
  })

  return <ul>{ links }</ul>
}
