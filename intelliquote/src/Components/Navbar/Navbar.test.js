import React from 'react';
import { render, screen } from '@testing-library/react';
import {shallow} from 'enzyme'
import {createMemoryHistory} from 'history'
import LandingPage from '../LandingPage/LandingPage'
import { Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import App from '../../App'
import Navbar from './Navbar'

//tests that navbar is rendered
it('renders without crashing', () => {
  shallow(<Navbar />);
});

//generate left click action and use the quiz button on the navbar to test it works
it('test quiz button on navbar', () => {
  const history = createMemoryHistory()
  render(
    <Router history = {history}>
      <App />
    </Router>
  )

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/Quiz/i), leftClick)

  // check that the content changed to the new page 'I am the lift of the party' is one of the first things the user sees on the quiz page
  expect(screen.getByText(/I Am the life of the party/i)).toBeInTheDocument()
});

//generate left click action and use the home button on the navbar to test it works
it('test quiz button on navbar', () => {
  const history = createMemoryHistory()
  render(
  <Router history = {history}>
      <App />
    </Router>
  )

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/Home/i), leftClick)

  // check that the content changed to the new page 'I am the lift of the party' is one of the first things the user sees on the quiz page
  expect(screen.getByText(/Landing Page/i)).toBeInTheDocument()
});

//generate left click action and use email button on the navbar to test it works
it('test email button on navbar', () => {
  const history = createMemoryHistory()
  render( 
    <Router history = {history}>
      <App />
    </Router>
  )

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/Email/i), leftClick)

  // check that the content changed to the new page
  expect(screen.getAllByText(/Email/i)[0]).toBeInTheDocument()
})

//generate left click action and use suggest button on the navbar to test it works
it('test suggest button on navbar', () => {
  const history = createMemoryHistory()
  render( 
    <Router history = {history}>
      <App />
    </Router>
  )

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/Suggest/i), leftClick)

  // check that the content changed to the new page
  expect(screen.getByText(/Suggest A Quote/i)).toBeInTheDocument()
})