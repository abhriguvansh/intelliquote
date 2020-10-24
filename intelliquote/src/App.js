import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage'
import QuizPage from './Components/QuizPage/QuizPage'
import EmailPage from './Components/EmailPage/EmailPage'

function App() {
  return (
    <div>
    <Router >
      <Route exact path = '/' component = {LandingPage}/>
      <Route exact path = '/quiz' component = {QuizPage} />
      <Route exact path = '/email' component = {EmailPage} />
    </Router>
    </div>
  );
}

export default App;
