import React from 'react';
import './FlaggedQuote.css';
import axios from 'axios';

export default function FlaggedQuote({ quotes }) {
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

  const resetFlag = async (key, e) => {
    e.preventDefault();
    console.log('accepted');
    axios
      .post(`http://localhost:8080/api/resetFlags/${key}`)
      .then((res) => console.log(res));
    alert('Flags Reset!');
    window.location = '/';
  };

  const removeQuote = async (key, e) => {
    e.preventDefault();
    console.log('rejected');
    axios
      .post(`http://localhost:8080/api/removeFlaggedQuote/${key}`)
      .then((res) => console.log(res));
    alert('Quote Removed!');
    window.location = '/';
  };
  return (
    <div className={'quotes-container'}>
      {quotes
        .filter((quote) => quote)
        .map((quote) => (
          <div key={quote.id} className={'quote-div'}>
            <h1 className={'quote'}>{quote.quoteContent}</h1>
            <h2 className={'author'}>{quote.author}</h2>
            <button onClick={(e) => resetFlag(quote.id, e)}>Reset Flag</button>
            <button onClick={(e) => removeQuote(quote.id, e)}>Remove</button>
          </div>
        ))}
    </div>
  );
}
