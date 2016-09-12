import React from 'react'
import Moment from 'moment'

import CSS from './styles.scss'

export const Footer = props => {
  const now = Moment().year()
  return <footer className={ CSS.footer }>
    <p>© 2016 - { now } <a href="mailto:jose.fraley@gmail.com">Joe Fraley</a></p>
  </footer>
}
