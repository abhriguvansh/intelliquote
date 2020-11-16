import React from 'react';
import './SuggestButton.css';
import Quote from '../../Quote/Quote';
import axios from 'axios';

class SuggestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: '', author: '', personality: '' };
    this.submitClick = this.submitClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  async submitClick(event) {
    event.preventDefault();
    console.log(this.state);
    const quote = {
      quoteContent: this.state.content,
      author: this.state.author,
      personality: this.state.personality,
    };
    axios
      .post(`http://localhost:8080/api/suggestQuote`, quote)
      .then((res) => console.log(res));

    alert('Quote Submitted!');
  }
  render() {
    return (
      <div className='form-div'>
        <form action='' onSubmit={this.submitClick} className='suggest-form'>
          <h2>Suggest A Quote</h2>
          <br />
          <label htmlFor='content'>
            Quote:{' '}
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              name='content'
              id=''
            />
          </label>
          <br />
          <label htmlFor='author'>
            Author:{' '}
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              name='author'
              id=''
            />
          </label>
          <br />
          <label htmlFor='personality'>
            Personality (OCEAN):{' '}
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              name='personality'
              id=''
            />
          </label>
          <br />
          <label htmlFor='Submit'>
            <input
              type='submit'
              value='Submit'
              name='Submit'
              style={{ width: '200px' }}
            />
          </label>
        </form>
      </div>
    );
  }
}
export default SuggestButton;
