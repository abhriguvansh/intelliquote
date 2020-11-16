import React from 'react';
import './Panel.css';
import Navbar from '../Navbar/Navbar';
import SuggestedQuote from '../Suggest/SuggestedQuote/SuggestedQuote';
import SuggestButton from '../Suggest/SuggestButton/SuggestButton';
import FlaggedQuote from '../Suggest/FlaggedQuote/FlaggedQuote';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggested: [],
      flagged: [],
    };
    this.renderSuggested = this.renderSuggested.bind(this);
    this.renderFlagged = this.renderFlagged.bind(this);
  }
  async renderSuggested(event) {
    event.preventDefault();
    const apiUrl = `${process.env.REACT_APP_LOCALHOST_URL}/suggested`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      this.setState({
        suggested: data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  async renderFlagged(event) {
    event.preventDefault();
    const apiUrl = `${process.env.REACT_APP_LOCALHOST_URL}/flagged`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      this.setState({
        flagged: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <Navbar />

        <button onClick={this.renderSuggested}> Get Suggested</button>
        <button onClick={this.renderFlagged}>Get Flagged</button>
        <SuggestedQuote quotes={this.state.suggested} />
        <FlaggedQuote quotes={this.state.flagged} />
      </div>
    );
  }
}

export default Panel;
