import React from 'react'
import { Link, IndexLink } from 'react-router'

import { createMarkup } from '../../utilities.js'

import CSS from './styles.scss'


export const Nav = props => {
  return <nav className={ CSS.nav }>
    <IndexLink to="/" activeClassName={ CSS.active } className={ CSS.link }> Home </IndexLink>
    <Link to="/about" activeClassName={ CSS.active } className={ CSS.link }> About </Link>
    <Link to="/reading" activeClassName={ CSS.active } className={ CSS.link }> Reading </Link>
    <Link to="/resume" activeClassName={ CSS.active } className={ CSS.link }> Resume </Link>
  </nav>
}
