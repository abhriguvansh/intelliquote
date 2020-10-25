
import React from 'react';
import {shallow} from 'enzyme'
import QuizPage from './QuizPage'
import {createMemoryHistory} from 'history'
import LandingPage from '../LandingPage/LandingPage'
import { Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';

//tests that quiz page is rendered without crashing
it('renders without crashing', () => {
  shallow(<QuizPage />);
});

it('test quiz button on navbar', () => {
  const history = createMemoryHistory()
  render(
    <Router history = {history}>
      <QuizPage />
    </Router>
  )

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/lll/i))


  expect(screen.findByText('Question 2'))
  userEvent.click(screen.getByText(/lll/i))


  expect(screen.findByText('Question 2'))
  userEvent.click(screen.getByText(/lll/i))


  expect(screen.findByText('Question 2'))
});


