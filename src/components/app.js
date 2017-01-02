/**
* This file is the real root of the React tree
* You probably don't need to edit this unless you're adding something
* structural to every single "page" of the site
*/
'use strict'
import React from 'react'
import { Nav } from './nav'
import { Footer } from './footer'

export const App = ({ children, route }) => {
  const newChildren = React.cloneElement(children, { data: route.data })
  return <div>
    <Nav />
    <main>{ newChildren }</main>
    <Footer />
  </div>
}
