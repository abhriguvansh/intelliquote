import React from 'react';
import './Suggest.css';
import Navbar from '../Navbar/Navbar';
import Quote from '../Quote/Quote';
import SuggestButton from './SuggestButton/SuggestButton';

function Suggest() {
  return (
    <div>
      <Navbar />
      <SuggestButton />
      <h2 style={{ display: 'none' }}>Suggest</h2>
    </div>
  );
}

export default Suggest;
