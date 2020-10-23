import React from 'react'
import './QuizPage.css'
import Navbar from '../Navbar/Navbar'
import Question from './Question/Question'
import PropTypes from 'prop-types';
import QuestionCount from './QuestionCount/QuestionCount'
import AnswerOption from './AnswerOption/AnswerOption'



function QuizPage(){
  constructor(props) {
  super(props);
  
  this.state = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {},
    result: ''
  };
}
componentDidMount() {
  const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  

  this.setState({
    question: quizQuestions[0].question,
    answerOptions: shuffledAnswerOptions[0]
  });
}

shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
    return(
        <div>
        <Navbar />
          <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
        </div>
    )

}

export default QuizPage