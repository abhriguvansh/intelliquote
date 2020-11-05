import React from 'react';
import './Suggest.css';
import Navbar from '../Navbar/Navbar';
import Quote from '../Quote/Quote';
import SuggestButton from './SuggestButton/SuggestButton';

function Suggest() {
  function renderQuotes() {
    //fetch quotes from database
    //for each quote returned, create a <Quote /> component
    //add the <Quote /> component to the list of things to be rendered
  }
  return (
    <div>
      <Navbar />
      <SuggestButton />
      <h2 style={{ display: 'none' }}>Suggest</h2>
      <div className='quotes-display'></div>
    </div>
  );
}

export default Suggest;
