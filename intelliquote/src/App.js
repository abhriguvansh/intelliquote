import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage'
import Quiz from './Components/Quiz/Quiz'

function App() {
  return (
    <div>
    <Router >
      <Route exact path = '/' component = {LandingPage}/>
      <Route exact path = '/quiz' component = {Quiz} />
    </Router>
    </div>
  );
}

export default App;
