import Path from 'path-browserify'
import React from 'react'
import Helmet from 'react-helmet'

import { ListOfPosts } from '../../components/blog/list-of-posts.js'
import { getPosts, createMarkup } from '../../utilities.js'
import { ProfilePhoto } from '../../components/profile-photo/index.js'

import CSS from './styles.scss'

export const HomePage = props => {
  const posts = getPosts()
  return <section className="home">
    <Helmet
      title="Home | RatticusScript"
      meta={[
        { name: 'description', content: `The internet home base of Joe Fraley. That's me. You get what you pay for (you didn't pay anything...check yourself!)` }
      ]}
    />
    <header className={ `${ CSS.header } h-card` }>
      <ProfilePhoto />
      <div role="introduction" className={ CSS.intro }>
        <h1 className="p-name">Joe Fraley</h1>
        <p>Just hoping to leave the world a little better than I found it.</p>
      </div>
    </header>

    <ListOfPosts posts={ posts }/>
  </section>
}
