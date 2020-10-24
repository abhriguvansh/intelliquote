
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import QuizPage from './QuizPage'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'


//tests involving the different quiz results
describe('quiz results', () => {

  //test that a user can get openness as their most prominent trait
  test('openness', () => {
        const history = createMemoryHistory()

    render(
        <Router history = {history}>
      <QuizPage />
      </Router>
    )

  const leftClick = { button: 0 }
    //these are the answers the user must take to get the openness trait
    userEvent.click(screen.getByLabelText('lll'), leftClick)
    userEvent.click(screen.getByLabelText('ll'), leftClick)
    userEvent.click(screen.getByLabelText('l'), leftClick)
    userEvent.click(screen.getByLabelText('l'), leftClick)
    expect(screen.getByText(/Openness/i)).toBeInTheDocument();
    
  })
})

