/**
* This file is the real root of the React tree
* You probably don't need to edit this unless you're adding something
* structural to every single "page" of the site
*/

import React from 'react'
import { Nav } from './nav/index.js'
import { Footer } from './footer/index.js'

import BASE from '../styles/base.scss'


export const App = ({ children, route }) => {
  const newChildren = React.cloneElement(children, { data: route.data })
  return <div>
    <Nav />
    <main className={ BASE.main }>
      { newChildren }
    </main>
    <Footer />
  </div>
}
