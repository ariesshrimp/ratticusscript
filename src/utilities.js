import Path from 'path-browserify'
import Moment from 'moment'

export const sortPosts = posts => {
  const sorted = posts.sort(({ meta: A }, { meta: B }) => {

    let { date: dateA } = A.attributes
    let { date: dateB } = B.attributes
    dateA = Moment(dateA)
    dateB = Moment(dateB)

    if (dateA === dateB) return 0
    return dateA < dateB ? 1 : -1
  })
  return sorted
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
      name: Path.basename(file).split('.')[0],  // Get the filename and take off the file extension
      id: index,
      content,
      meta
    }
  })

  return sortPosts(posts)
}

export const getPost = name => {
  const meta = require(`!!json!front-matter!./posts/${ name }.md`)
  const content = require(`./posts/${ name }.md`)

  return {
    name,
    content,
    meta
  }
}

// XXX:jmf This is a shorthand for that dumb dangerouslySetInnerHtml trap React uses for "security"
export const createMarkup = HTML => {
  return {__html: HTML}
}
