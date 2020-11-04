import React from 'react';
import './EmailPage.css';
import Navbar from '../Navbar/Navbar';

function EmailPage() {
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
        <div className='submit-div'>
          {' '}
          <button type='submit' className='submit'>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailPage;
