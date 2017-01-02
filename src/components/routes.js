import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App }  from './app'
import { ListOfPosts } from './blog/list-of-posts'
import { BlogPost } from './blog/blog-post'

import { AboutPage } from '../pages/about'
import { HomePage } from '../pages/home'
import { ResumePage } from '../pages/resume'
import { ReadingPage } from '../pages/reading'


const Routes = <Route path="/" component={ App }>
  <IndexRoute component={ HomePage } />
  <Route path="about" component={ AboutPage } />
  <Route path="resume" component={ ResumePage } />
  <Route path="reading" component={ ReadingPage } />

  <Route path="posts" component={ ListOfPosts }/>
  <Route path="posts/:date" component={ BlogPost }/>
</Route>

module.exports = Routes
