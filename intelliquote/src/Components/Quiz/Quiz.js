import React from 'react'
import './Quiz.css'
import Navbar from '../Navbar/Navbar'

import {
  Link

} from 'react-router-dom';

function Quiz(){
    return(
        <div>
        <Navbar />
          <ul>
              <li>
                  <h3>Question</h3>
                  <input type="radio" name="" id="" value = 'Strongly Disagree' /> Strongly Disagree <br/>
              </li>
          </ul>
        </div>
    )

}

export default Quiz