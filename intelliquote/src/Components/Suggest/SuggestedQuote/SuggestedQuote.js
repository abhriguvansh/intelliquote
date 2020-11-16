import React from 'react';
import './SuggestedQuote.css';
import axios from 'axios';

export default function SuggestedQuote({ quotes }) {
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

  const acceptQuote = async (key, e) => {
    e.preventDefault();
    console.log('accepted');
    axios
      .post(`http://localhost:8080/api/confirmQuote/${key}`)
      .then((res) => console.log(res));
    alert('Quote Accepted!');
    window.location = '/';
  };

  const rejectQuote = async (key, e) => {
    e.preventDefault();
    console.log('rejected');
    axios
      .post(`http://localhost:8080/api/rejectQuote/${key}`)
      .then((res) => console.log(res));
    alert('Quote Rejected!');
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
            <button onClick={(e) => acceptQuote(quote.id, e)}>Accept</button>
            <button onClick={(e) => rejectQuote(quote.id, e)}>Reject</button>
          </div>
        ))}
    </div>
  );
}
