import React from 'react'
import { Link } from 'react-router'
import { createMarkup, getPost } from '../../utilities.js'
import CSS from '../nav/styles.scss'

export const MoreButton = ({ post, type }) => {
  if (!post) return null
  return <Link to={`/posts/${ post }`} className={ CSS.link } >Keep reading more like this...</Link>
}
