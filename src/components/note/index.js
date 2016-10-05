import React from 'react'
import Moment from 'moment'
import CSS from './styles.scss'
import { createMarkup } from '../../utilities.js'

export const buildHashtagLink = (match, offset, string) => {
  const hashtag = match.substring(1)
  return `<a href="https://twitter.com/hashtag/${ hashtag }" target="_">${ match }</a>`
}

export const filterForHashtags = string => string.replace(/#\S+/g, buildHashtagLink)

export const Note = ({ note }) => {
  const date = Moment(note.meta.attributes.date).format('LLLL')

  return <div className={ CSS.preview }>
    <header className={ CSS.previewHead }>
      <h4 className={ CSS.date }>{ date }</h4>
      { note.media
        ? <img className={ CSS.noteImage } src={ note.media[0].media_url_https} alt={ note.content }></img>
        : null
      }
      <p dangerouslySetInnerHTML={ createMarkup(filterForHashtags(note.content)) }></p>
    </header>

    {
      note.meta.attributes.link
      ? <p><a href={ note.meta.attributes.link } target="_">Cross posted on Twitter</a></p>
      : null
    }
  </div>
}
