//this is the actual web page that renders the quiz component. The user will take the quiz on this page

import React from 'react'
import './QuizPage.css'
import Navbar from '../Navbar/Navbar'
import Question from './Question/Question'
import PropTypes from 'prop-types';
import QuestionCount from './QuestionCount/QuestionCount'
import AnswerOption from './AnswerOption/AnswerOption'
import Quiz from './Quiz/Quiz'
import quizQuestions from './quizQuestions'
import Results from './Results/Results'


class QuizPage extends React.Component {
  constructor(props) {
  super(props);
  
  this.state = {
    counter: 0, //start at question 0
    questionId: 1, //display to the user that we are on question 1
    questions: [], //intially there are no questions to display until you grab them from quizQuestions
    answerOptions: [], //same as questions but with answers
    answer: '', //tracks the most recent answer
    answersCount: {}, //tracks each answer that the user has submitted
    result: '' //the final personality
  };
  this.handleAnswerSelected = this.handleAnswerSelected.bind(this);

}
 componentDidMount() {
   //when the page is first rendered, set the questions and answer to the 0th element in quizQuestions.js
  
    this.setState({
      questions: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answer
    });
  }



//when an answer is selected, either go to the next question or get the results 
handleAnswerSelected(event) {
  this.setUserAnswer(event.currentTarget.value);
  if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
}

//use answersCount as well as Math.max to see which personality was most prominent
getResults() {
  const answersCount = this.state.answersCount;
  const answersCountKeys = Object.keys(answersCount);
  const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
  const maxAnswerCount = Math.max.apply(null, answersCountValues);

  return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
}

//set the result to the max or 'a little bit of everything' if no prominent personality was detected 
setResults (result) {
  if (result.length === 1) {
    this.setState({ result: result[0] });
  } else {
    this.setState({ result: 'A little bit of everything' });
  }
}


//store the users answer in answerCount
setUserAnswer(answer) {
  this.setState((state) => ({
    answersCount: {
      ...state.answersCount,
      [answer]: (state.answersCount[answer] || 0) + 1
    },
    answer: answer
  }));
}

//increase the counter and load up the next element's questions and answers
setNextQuestion() {
  const counter = this.state.counter + 1;
  const questionId = this.state.questionId + 1;
  this.setState({
    counter: counter,
    questionId: questionId,
    questions: quizQuestions[counter].question,
    answerOptions: quizQuestions[counter].answer,
    answer: ''
  });
}

//render the actual quiz
renderQuiz() {
  return (
    <div className = 'quiz-div'>
    <Quiz
    // these attributes are what is passed to the different subcomponents
      answer={this.state.answer}
      answerOptions={this.state.answerOptions}
      questionId={this.state.questionId}
      questions={this.state.questions}
      questionTotal={quizQuestions.length}
      onAnswerSelected={this.handleAnswerSelected}
    />
      </div>
  );
}

//render result component
renderResult() {
  return (
    <div data-testid  = 'result-div'>
    <Results quizResult={this.state.result} />
    </div>
  );
}

//if result is empty render the quiz, otherwise render result
render() {
  return(
        <div data-testid = 'quiz-div'>
        <Navbar />
        <h1>{this.state.result}</h1>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
          
        </div>
    )}
    

}

export default QuizPage