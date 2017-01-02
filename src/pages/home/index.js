'use strict'
import Helmet from 'react-helmet'
import { ListOfPosts } from '../../components/blog/list-of-posts'
import Path from 'path-browserify'
import { ProfilePhoto } from '../../components/profile-photo'
import React from 'react'
import { getPosts } from '../../utilities'

export const HomePage = props => {
  return <section className="home">
    <Helmet
      title="Home | RatticusScript"
      meta={[{
        content: `The internet home base of Joe Fraley. That's me. You get what you pay for (you didn't pay anything...check yourself!)`,
        name: 'description'
      }]}
    />
    <header>
      <ProfilePhoto />
      <div role="introduction">
        <h1>Joe Fraley</h1>
        <p>Just hoping to leave the world a little better than I found it.</p>
      </div>
    </header>

    <ListOfPosts posts={ getPosts() }/>
  </section>
}
