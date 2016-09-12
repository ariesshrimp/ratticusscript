import Path from 'path-browserify'
import React from 'react'

import { ListOfPosts } from '../../components/blog/list-of-posts.js'
import { getPosts, createMarkup } from '../../utilities.js'

export const HomePage = props => {
  const posts = getPosts()
  return <section className="home">
    <h1>Home</h1>
    <p>I'm Joe</p>

    <ListOfPosts posts={ posts }/>
  </section>
}
