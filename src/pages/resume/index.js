'use strict'
import HTML from './resume.md'
import Helmet from 'react-helmet'
import React from 'react'
import { createMarkup } from '../../utilities'

const Resume = props => <section dangerouslySetInnerHTML={ createMarkup(HTML) }></section>

export const ResumePage = props => {
  return <section className="resume">
    <Helmet
      title="Resume | RatticusScript"
      meta={[{ content: 'My canonical resume.', name: 'description' }]}
    />
    <h1>Resume</h1>
    <Resume />
    <a href="/resume.pdf" download>Download a PDF Copy</a>
  </section>
}
