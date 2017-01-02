'use strict'
import { Link } from 'react-router'
import React from 'react'

export const MoreButton = ({ post, type }) => {
  if (!post) return null
  else return <Link to={ `/posts/${post}` }>Keep reading more like this...</Link>
}
