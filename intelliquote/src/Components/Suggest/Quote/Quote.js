import React from 'react'
import './Quote.css'

const Quotes = props => {
    return(
        <div className = 'quote-div'>
          <h1 className = 'quote'>{props.quote}</h1>
          <h2 className = 'author'>-{props.author}</h2>
        </div>
    )

}

export default Quotes