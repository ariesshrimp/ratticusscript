import React from 'react'
import { createMarkup } from '../../utilities.js'

/**
 * For more on the <details> and <summary> elements,
 * see: http://www.w3schools.com/tags/tag_summary.asp
 *
 * For more on the <time> element,
 * see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
 */
export const Book = ({ props }) => <div className="book">
    <h2 className="title">{ props.title }</h2>
    <h3 className="author">{ props.author }</h3>

    <p>started:<time>{ props.started }</time></p>
    <p>finished: <time>{ props.finished }</time></p>

    <p className="rating">rating: { props.rating }</p>

    {props.review
        ? <details>
            <summary>Review</summary>
            <p dangerouslySetInnerHTML={ createMarkup(props.review) }></p>
          </details>
        : null}
</div>
