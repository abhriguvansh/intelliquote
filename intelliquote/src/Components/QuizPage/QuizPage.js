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
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {},
    result: ''
  };
  this.handleAnswerSelected = this.handleAnswerSelected.bind(this);

}
 componentDidMount() {
  
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answer
    });
  }




handleAnswerSelected(event) {
  this.setUserAnswer(event.currentTarget.value);
  if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
}
getResults() {
  const answersCount = this.state.answersCount;
  const answersCountKeys = Object.keys(answersCount);
  const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
  const maxAnswerCount = Math.max.apply(null, answersCountValues);

  return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
}

setResults (result) {
  if (result.length === 1) {
    this.setState({ result: result[0] });
  } else {
    this.setState({ result: 'Undetermined' });
  }
}
setUserAnswer(answer) {
  this.setState((state) => ({
    answersCount: {
      ...state.answersCount,
      [answer]: (state.answersCount[answer] || 0) + 1
    },
    answer: answer
  }));
}
setNextQuestion() {
  const counter = this.state.counter + 1;
  const questionId = this.state.questionId + 1;
  this.setState({
    counter: counter,
    questionId: questionId,
    question: quizQuestions[counter].question,
    answerOptions: quizQuestions[counter].answer,
    answer: ''
  });
}
renderQuiz() {
  return (
    <Quiz
      answer={this.state.answer}
      answerOptions={this.state.answerOptions}
      questionId={this.state.questionId}
      question={this.state.question}
      questionTotal={quizQuestions.length}
      onAnswerSelected={this.handleAnswerSelected}
    />
  );
}

renderResult() {
  return (
    <Results quizResult={this.state.result} />
  );
}
render() {
  return(
        <div>
        <Navbar />
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
    )}
    

}

export default QuizPage