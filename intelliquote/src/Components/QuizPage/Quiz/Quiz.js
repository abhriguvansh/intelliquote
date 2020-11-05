//creates a quiz, QuizPage.js renders this Quiz component

import React from 'react';
import './Quiz.css';
import Question from '../Question/Question';
import PropTypes from 'prop-types';
import QuestionCount from '../QuestionCount/QuestionCount';
import AnswerOption from '../AnswerOption/AnswerOption';

function Quiz(props) {
  //render questions
  function renderQuestions(key) {
    return <Question content={key.content} />;
  }

  //render possible answers
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  //iterate through questions and answers in quizQuestions.js and display the questions and answers
  return (
    <div key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <ul className='questionOptions'>
        {props.questions.map(renderQuestions)}
      </ul>{' '}
      <ul className='answerOptions'>
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
      <h1 style={{ display: 'none' }}>Openness</h1>
      <h1 style={{ display: 'none' }}>Neuroticism</h1>
      <h1 style={{ display: 'none' }}>Agreeableness</h1>
      <h1 style={{ display: 'none' }}>A little bit of everything</h1>
    </div>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Quiz;
