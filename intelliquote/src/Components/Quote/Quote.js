import React from 'react';
import './Quote.css';

function handleClick() {}
export default function Quote({ quotes }) {
  if (!quotes) {
    return quotes;
  }
  return (
    <div className={'quotes-container'}>
      {quotes
        .filter((quote) => quote)
        .map((quote) => (
          <div key={quote.id} className={'quote-div'}>
            <h1 className={'quote'}>{quote.quoteContent}</h1>
            <h2 className={'author'}>{quote.author}</h2>
            <button onClick={handleClick}>Flag Quote</button>
          </div>
        ))}
    </div>
  );
}
