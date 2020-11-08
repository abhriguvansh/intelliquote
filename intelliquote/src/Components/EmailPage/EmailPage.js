import React from 'react';
import { Component } from 'react';
import './EmailPage.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
class EmailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      interval: '',
      personality: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.handleUnsubscribe = this.handleSubscribe.bind(this);
  }

  handleChange(event) {
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    // this.setState({
    //   [name]: value,
    // });
  }

  async handleSubscribe(event) {
    event.preventDefault();

    const data = {
      email: this.state.email,
      interval: this.state.interval,
      personality: this.state.personality,
    };
    axios
      .post('http://localhost:8080/api/emailRequest', data)
      // .then((res) => console.log(res.data));
    alert(event.target.value);
  }

  handleUnsubscribe(event) {
    // event.preventDefault();
  }
  render() {
    return (
      <div>
        <Navbar />
        <form className='container'>
          <label className='email'>
            <p>Email</p>
          </label>
          <br />
          <div className='email-div'>
            <input
              type='email'
              name='email'
              placeholder='Enter Email'
              className='email-input'
              required
              onChange={this.handleChange}
            />
          </div>
          <div className='interval-div'>
            <label htmlFor='daily'>
              Daily{' '}
              <input
                type='radio'
                name='interval'
                id='daily'
                onChange={this.handleChange}
                value='daily'
              />
            </label>

            <label htmlFor='weekly'>
              Weekly
              <input
                type='radio'
                name='interval'
                id='weekly'
                onChange={this.handleChange}
                value='weekly'
              />
            </label>

            <label htmlFor='monthly'>
              Monthly{' '}
              <input
                type='radio'
                name='interval'
                id='monthly'
                onChange={this.handleChange}
                value='monthly'
              />
            </label>
          </div>

          <div className='personality-div'>
            <label htmlFor='openness'>
              openness{' '}
              <input
                type='radio'
                name='personality'
                id='openness'
                onChange={this.handleChange}
                value='openness'
              />
            </label>

            <label htmlFor='conscientiousness'>
              conscientiousness
              <input
                type='radio'
                name='personality'
                id='conscientiousness'
                onChange={this.handleChange}
                value='conscientiousness'
              />
            </label>

            <label htmlFor='extroversion'>
              extroversion{' '}
              <input
                type='radio'
                name='personality'
                id='extroversion'
                onChange={this.handleChange}
                value='extroversion'
              />
            </label>
            <label htmlFor='agreeableness'>
              agreeableness{' '}
              <input
                type='radio'
                name='personality'
                id='agreeableness'
                onChange={this.handleChange}
                value='agreeableness'
              />
            </label>
            <label htmlFor='neuroticism'>
              neuroticism{' '}
              <input
                type='radio'
                name='personality'
                id='neuroticism'
                onChange={this.handleChange}
                value='neuroticisim'
              />
            </label>
          </div>
          <div className='button-div'>
            {' '}
            <button
              className='submit'
              data-testid='sub'
              onClick={this.handleSubscribe}
              value='subscribe'
            >
              Subscribe
            </button>
            <button
              className='submit'
              value='unsubscribe'
              onClick={this.handleUnsubscribe}
            >
              Unsubscribe
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EmailPage;
