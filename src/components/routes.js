import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App }  from './app.js'
import { ListOfPosts } from './blog/list-of-posts.js'
import { BlogPost } from './blog/blog-post.js'

import { AboutPage } from '../pages/about/index.js'
import { HomePage } from '../pages/home/index.js'
import { ResumePage } from '../pages/resume/index.js'
import { ReadingPage } from '../pages/reading/index.js'


const Routes = <Route path="/" component={ App }>
  <IndexRoute component={ HomePage } />
  <Route path="about" component={ AboutPage } />
  <Route path="resume" component={ ResumePage } />
  <Route path="reading" component={ ReadingPage } />

  <Route path="posts" component={ ListOfPosts }/>
  <Route path="posts/:date" component={ BlogPost }/>
</Route>

module.exports = Routes
