import React from 'react'
import { createMarkup } from '../../utilities.js'
import CSS from './styles.scss'

/**
 * For more on the <details> and <summary> elements,
 * see: http://www.w3schools.com/tags/tag_summary.asp
 *
 * For more on the <time> element,
 * see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
 */
export const Book = ({props}) => {
  const title = props.title.split(': ')[0]
  const subtitle = props.title.split(': ')[1]

  return <div>
    <h2 className={ CSS.title }>{ title }</h2>
    { subtitle ? <h3 className={ CSS.subtitle }>{ subtitle }</h3> : null }
    <h4 className={ CSS.author }>{ props.author }</h4>
    {
      <details>
        <summary>Review</summary>
        <p>
          <span>Started: <time>{ props.started || '--' }</time></span>
          <span> | Finished: <time>{ props.finished || '--' }</time></span>
        </p>
        <p className="rating">Rating: { props.rating || '--' }</p>
        <p dangerouslySetInnerHTML={ createMarkup(props.review || '') }></p>
      </details>
    }
  </div>
}
