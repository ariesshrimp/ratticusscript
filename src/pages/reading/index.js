import React from 'react'

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

export const ReadingPage = props => {
  return <section className="reading">
    <h1 className={ CSS.header }>Reading List</h1>
    <nav className={ CSS.jumpNav } role="navigation">
      <a href="#2014">2014</a>
      <a href="#2015">2015</a>
      <a href="#2016">2016</a>
    </nav>

    <ul className={ CSS.list }>
      <li>
        <time className={ CSS.year } id="2016">2016</time>
        {
          books.filter(book => book.finished.split('/')[0] === '2016').map((book, index) => {
            return <div className={ CSS.book } key={ index }> <Book props={ book } /></div>
          })
        }
      </li>
      <li>
        <time className={ CSS.year } id="2015">2015</time>
        {
          books.filter(book => book.finished.split('/')[0] === '2015').map((book, index) => {
            return <div className={ CSS.book } key={ index }> <Book props={ book } /></div>
          })
        }
      </li>
      <li>
        <time className={ CSS.year } id="2014">2014</time>
        {
          books.filter(book => book.finished.split('/')[0] === '2014').map((book, index) => {
            return <div className={ CSS.book } key={ index }> <Book props={ book } /></div>
          })
        }
      </li>
    </ul>
    <a className={ CSS.jumpButton } href="#">(Jump to top)</a>
  </section>
}
