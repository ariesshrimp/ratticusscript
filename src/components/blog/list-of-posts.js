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

    {
      meta.externalLink
      ? <p><a href={ meta.externalLink }>Cross posted on Medium</a></p>
      : null
    }

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

export const Note = ({ note }) => {
  console.log(note.meta)
  const date = Moment(note.meta.attributes.date).format('LLLL')

  return <div className={ CSS.preview }>
    <header className={ CSS.previewHead }>
      <h4 className={ CSS.date }>{ date }</h4>
      <p>{ note.content }</p>
    </header>

    {
      note.meta.attributes.link
      ? <p><a href={ note.meta.attributes.link }>Cross posted on Twitter</a></p>
      : null
    }
  </div>
}

export const ListOfPosts = props => {
  const links = props.posts.map((post, index) => {
    if (post.meta.type && post.meta.type === 'note') {
      console.log('type is a note: ', post)
      return <li key={ post.id }><Note note={ post }/></li>
    }
    else if (index === 0) {
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
