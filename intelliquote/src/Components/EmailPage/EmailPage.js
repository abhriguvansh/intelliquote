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
            </div>
            <div className='submit-div'>
                {' '}
                <button type='submit' className='sbumit'>
                  submit
                </button>
              </div>
        </div>
    )

}

export default LandingPage