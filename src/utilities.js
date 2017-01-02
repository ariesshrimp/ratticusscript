'use strict'
import Moment from 'moment'
import Path from 'path-browserify'

export const sortPosts = posts => {
  const sorted = posts.sort(({ meta: A }, { meta: B }) => {

    let { date: dateA } = A.attributes
    let { date: dateB } = B.attributes
    dateA = Moment(dateA)
    dateB = Moment(dateB)

    if (dateA === dateB) return 0
    return dateA < dateB ? 1 : -1
  })
  return sorted.filter(({ meta: { attributes: { status } } }) => status !== 'draft')
}

export const getPosts = () => {
  // Get the front-matter info out of the markdown file
  const requireMeta = require.context('!!json!front-matter!./posts', true, /.*/)

  // Get the raw contents of the markdown file in a format that html-loader can handle
  const requirePost = require.context('./posts', true, /.*/)

  const paths = requirePost.keys()
  const posts = paths.map((file, index) => {
    const meta = requireMeta(file)
    const content = requirePost(file)

    return {
      content,
      id: index,
      meta,
      name: Path.basename(file).split('.')[0]  // Get the filename and take off the file extension
    }
  })

  return sortPosts(posts)
}

export const getPost = name => {
  const meta = require(`!!json!front-matter!./posts/${name}.md`)
  const content = require(`./posts/${name}.md`)

  return {
    content,
    meta,
    name
  }
}

export const lastPost = ({ meta }) => {
  const requireMeta = require.context('!!json!front-matter!./posts', true, /.*/)
  const requirePost = require.context('./posts', true, /.*/)
  const { id } = meta.attributes
  const posts = requirePost.keys()
  const lastPost = posts.find(post => {
    const thisMeta = requireMeta(post)
    return thisMeta.attributes.id === id - 1
  })

  return lastPost ? lastPost.substring(2, lastPost.length - 3) : null
}

export const nextPost = ({ meta }) => {
  const requireMeta = require.context('!!json!front-matter!./posts', true, /.*/)
  const requirePost = require.context('./posts', true, /.*/)
  const { id } = meta.attributes
  const posts = requirePost.keys()
  const nextPost = posts.find(_post => {
    const thisMeta = requireMeta(_post)
    return thisMeta.attributes.id === id + 1
  })

  return nextPost ? nextPost.substring(2, nextPost.length - 3) : null
}

// XXX:jmf This is a shorthand for that dumb dangerouslySetInnerHtml trap React uses for "security"
export const createMarkup = HTML => {
  return {__html: HTML}
}
