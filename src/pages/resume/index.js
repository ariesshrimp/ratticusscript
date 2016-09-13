import React from 'react'

import HTML from './resume.md'
import { createMarkup } from '../../utilities.js'

import CSS from './styles.scss'

const Resume = props => <section dangerouslySetInnerHTML={ createMarkup(HTML) }></section>

export const ResumePage = props => {
  return <section className="resume">
      <h1 className={ CSS.header }>Resume</h1>
      <Resume />
      <form method="get" action="/resume.pdf">
        <button type="submit">Download a PDF Copy</button>
      </form>
  </section>
}
