import React from 'react'
import Helmet from 'react-helmet'

import HTML from './resume.md'
import { createMarkup } from '../../utilities.js'

import CSS from './styles.scss'

const Resume = props => <section dangerouslySetInnerHTML={ createMarkup(HTML) }></section>

export const ResumePage = props => {
  return <section className="resume">
    <Helmet
      title="Resume | RatticusScript"
      meta={[
        { name: 'description', content: 'My canonical resume.' }
      ]}
    />
    <h1 className={ CSS.header }>Resume</h1>
    <Resume />
    <a href="/resume.pdf" download>Download a PDF Copy</a>
  </section>
}
