import React from 'react'
import Helmet from 'react-helmet'

import books from './books.json'
import { Book } from './book.js'
import CSS from './styles.scss'


// TODO:jmf this is completely unfinished. Just a total back-of-the-napkin
export const FilteredCategory = (condition, set, ...props) => {
  return <time className={ CSS[props.class] } id={ props.id }>{ props.heading }</time>
  {
    set.filter(book => condition).map((book, index) => {
      return <div className={ CSS.book } key={ index }> <Book props={ book } /></div>
    })
  }
}

export const filterByYear = (list, year) => list.filter(book => book.finished.split('/')[0] === year)
const sortedBooks = [
  {year: 2016, list: filterByYear(books, '2016')},
  {year: 2015, list: filterByYear(books, '2015')},
  {year: 2014, list: filterByYear(books, '2014')}
]

export const ReadingPage = props => {
  return <section className="reading">
    <Helmet
      title="Reading | RatticusScript"
      meta={[
        { name: 'description', content: 'My canonical reading list.' }
      ]}
    />
    <h1 className={ CSS.header }>Reading List</h1>
    <nav className={ CSS.jumpNav } role="navigation">
      <a href="#2014">2014</a>
      <a href="#2015">2015</a>
      <a href="#2016">2016</a>
    </nav>

    <ul className={ CSS.list }>
      {
        sortedBooks.map((group, index) => {
          const { year, list } = group
          return <li key={ index }>
            <time className={ CSS.year } id={ year }>{ year } ({ list.length })</time>
            {
              list.map((book, index) => {
                return <div className={ CSS.book } key={ index }> <Book props={ book } /></div>
              })
            }
          </li>
        })
      }
    </ul>
    <a className={ CSS.jumpButton } href="#">(Jump to top)</a>
  </section>
}
