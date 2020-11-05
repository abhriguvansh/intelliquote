import React from 'react';
import { Component } from 'react';
import './EmailPage.css';
import Navbar from '../Navbar/Navbar';

class EmailPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <label className='email'>
            <p>Email</p>
          </label>
          <br />
          <div className='email-div'>
            <input
              type='email'
              placeholder='Enter Email'
              className='email-input'
              required
            />
          </div>
          <div className='interval-div'>
            <label htmlFor='daily'>
              Daily <input type='radio' name='interval' id='daily' />
            </label>

            <label htmlFor='weekly'>
              Weekly
              <input type='radio' name='interval' id='weekly' />
            </label>

            <label htmlFor='monthly'>
              Monthly <input type='radio' name='interval' id='monthly' />
            </label>
          </div>

          <div className='personality-div'>
            <label htmlFor='openness'>
              openness <input type='radio' name='personality' id='openness' />
            </label>

            <label htmlFor='conscientiousness'>
              conscientiousness
              <input type='radio' name='personality' id='conscientiousness' />
            </label>

            <label htmlFor='extroversion'>
              extroversion{' '}
              <input type='radio' name='personality' id='extroversion' />
            </label>
            <label htmlFor='agreeableness'>
              agreeableness{' '}
              <input type='radio' name='personality' id='agreeableness' />
            </label>
            <label htmlFor='neuroticism'>
              neuroticism{' '}
              <input type='radio' name='personality' id='neuroticism' />
            </label>
          </div>
          <div className='button-div'>
            {' '}
            <button type='submit' className='submit'>
              Subscribe
            </button>
            <button type='submit' className='submit'>
              Unsubscribe
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailPage;
