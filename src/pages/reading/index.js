import React from 'react'

import books from './books.json'
import { Book } from './book.js'


export const ReadingPage = props => {
  return <section className="reading">
    <h1>Reading List</h1>
    <ul className="reading-list">
        { books.map((book, index) => {
          return <li key={ index }> <Book props={ book } /></li>
        }) }
    </ul>
  </section>
}
