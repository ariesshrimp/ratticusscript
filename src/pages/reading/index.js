'use strict'
import { Book } from './book'
import Helmet from 'react-helmet'
import React from 'react'
import books from './books.json'

export const filterByYear = (list, year) => list.filter(book => book.finished.split('/')[0] === year)
const sortedBooks = [
  { list: filterByYear(books, '2016'), year: 2016 },
  { list: filterByYear(books, '2015'), year: 2015 },
  { list: filterByYear(books, '2014'), year: 2014 }
]

export const ReadingPage = props => {
  return <section className="reading">
    <Helmet
      title="Reading | RatticusScript"
      meta={[{ content: 'My canonical reading list.', name: 'description' }]}
    />
    <h1>Reading List</h1>
    <nav role="navigation">
      <a href="#2014">2014</a>
      <a href="#2015">2015</a>
      <a href="#2016">2016</a>
    </nav>

    <ul>
      {
        sortedBooks.map((group, index) => {
          const { year, list } = group
          return <li key={ index }>
            <time id={ year }>{ year } ({ list.length })</time>
            {
              list.map((book, index) => {
                return <div key={ index }> <Book props={ book } /></div>
              })
            }
          </li>
        })
      }
    </ul>
    <a href="#">(Jump to top)</a>
  </section>
}
