import Path from 'path-browserify'
import React from 'react'

import { ListOfPosts } from '../../components/blog/list-of-posts.js'
import { getPosts, createMarkup } from '../../utilities.js'
import { ProfilePhoto } from '../../components/profile-photo/index.js'

import CSS from './styles.scss'

export const HomePage = props => {
  const posts = getPosts()
  return <section className="home">
    <header className={ CSS.header }>
      <ProfilePhoto />
      <div role="introduction" className={ CSS.intro }>
        <h1>Joe Fraley</h1>
        <p>Just hoping to leave the world a little better than I found it.</p>
      </div>
    </header>

    <ListOfPosts posts={ posts }/>
  </section>
}
