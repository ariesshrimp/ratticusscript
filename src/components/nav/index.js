'use strict'
import { IndexLink, Link } from 'react-router'
import React from 'react'

export const Nav = () => <nav>
  <IndexLink to="/">Home</IndexLink>
  <Link to="/about">About</Link>
  <Link to="/reading">Reading</Link>
  <Link to="/resume">Resume</Link>
</nav>
