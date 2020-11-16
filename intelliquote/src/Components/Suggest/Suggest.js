import React from 'react';
import './Suggest.css';
import Navbar from '../Navbar/Navbar';
import SuggestedQuote from './SuggestedQuote/SuggestedQuote';
import SuggestButton from './SuggestButton/SuggestButton';

class Suggest extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <SuggestButton />
      </div>
    );
  }
}

export default Suggest;
