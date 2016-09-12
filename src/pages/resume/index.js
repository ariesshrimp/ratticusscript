import React from 'react'

import HTML from './resume.md'
import { createMarkup } from '../../utilities.js'

const Resume = props => <section dangerouslySetInnerHTML={ createMarkup(HTML) }></section>

export const ResumePage = props => {
  return <section className="resume">
      <h1>Resume</h1>
      <Resume />
  </section>
}
