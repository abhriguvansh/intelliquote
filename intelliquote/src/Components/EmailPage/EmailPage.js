import React from 'react'
import './EmailPage.css'
import Navbar from '../Navbar/Navbar'

function LandingPage(){
    return(
        <div>
        <Navbar />
          <div class='container'>
              <label className='email'>
                <p>Email</p>
              </label>
              <br />
              <div className='email-div'>
                <input
                  type='text'
                  placeholder='Enter Email'
                  className='email-input'
                  required
                />
              </div>
              <div className='submit-div'>
                {' '}
                <button type='submit' className='submit'>
                  submit
                </button>
              </div>
            </div>
        </div>
    )

}

export default LandingPage