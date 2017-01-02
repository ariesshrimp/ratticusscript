'use strict'
import React from 'react'
import { createMarkup } from '../../utilities'

// Get a string of x many stars.
export const numberToStars = number => Array.from('🌟'.repeat(number)).join('')

/**
 * For more on the <details> and <summary> elements,
 * see: http://www.w3schools.com/tags/tag_summary.asp
 *
 * For more on the <time> element,
 * see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
 */
export const Book = ({ props }) => {
  const title = props.title.split(': ')[0]
  const subtitle = props.title.split(': ')[1]

  return <div>
    <h2>{ title }</h2>
    { subtitle ? <h3>{ subtitle }</h3> : null }
    <h4>{ props.author }</h4>
    {
      <details>
        <summary>Review</summary>
        <p>
          <span>Started: <time>{ props.started || '--' }</time></span>
          <span> | Finished: <time>{ props.finished || '--' }</time></span>
        </p>
        <p className="rating">Rating: { numberToStars(parseInt(props.rating)) || '--' }</p>
        <p dangerouslySetInnerHTML={ createMarkup(props.review || '') }></p>
      </details>
    }
  </div>
}
