
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import LandingPage from './Components/LandingPage/LandingPage'
import { ExpansionPanelActions } from '@material-ui/core';
import {shallow} from 'enzyme'
import {createMemoryHistory} from 'history'
import { Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import ReactDOM from "react-dom";
import { mock } from "jest";
import { renderToDOM } from "./index";

//tests that app is rendered
it('renders without crashing', () => {
  shallow(<App />);
});

it('test quiz button on navbar', () => {
  const history = createMemoryHistory()
  render(
    <Router history = {history}>
      <App />
    </Router>
  )

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/Quiz/i), leftClick)

  // check that the content changed to the new page
  expect(screen.getByText(/I Am the life of the party/i)).toBeInTheDocument()
});

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
  expect(screen.getByText(/Email Page/i)).toBeInTheDocument()
})


