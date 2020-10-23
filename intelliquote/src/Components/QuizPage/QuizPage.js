import React from 'react'
import './QuizPage.css'
import Navbar from '../Navbar/Navbar'
import Question from './Question/Question'
import PropTypes from 'prop-types';
import QuestionCount from './QuestionCount/QuestionCount'
import AnswerOption from './AnswerOption/AnswerOption'

function QuizPage(){
    return(
        <div>
        <Navbar />
          <Question content = 'Test Question'/>
        </div>
    )

}

export default QuizPage