import React from 'react'
import './Quiz.css'
import Navbar from '../Navbar/Navbar'
import Question from './Question/Question'

function Quiz(){
    return(
        <div>
        <Navbar />
          <Question content = 'Test Question'/>
        </div>
    )

}

export default Quiz