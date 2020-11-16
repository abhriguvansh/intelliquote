import React from 'react';
import './Quote.css';
import axios from 'axios';

export default function Quote({ quotes }) {
  const flagQuote = async (key, e) => {
    e.preventDefault();
    console.log('test');
    axios
      .post(`http://localhost:8080/api/addFlag/${key}`)
      .then((res) => console.log(res.data));
  };
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
            <button onClick={(e) => flagQuote(quote.id, e)}>Flag Quote</button>
          </div>
        ))}
    </div>
  );
}
