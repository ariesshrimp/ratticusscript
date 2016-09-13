import React from 'react'

import books from './books.json'
import { Book } from './book.js'
import CSS from './styles.scss'


export const ReadingPage = props => {
  return <section className="reading">
    <h1 className={ CSS.header }>Reading List</h1>
    <ul className="reading-list">
        { books.map((book, index) => {
          return <li key={ index }> <Book props={ book } /></li>
        }) }
    </ul>
  </section>
}
