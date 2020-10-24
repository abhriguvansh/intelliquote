
import React from 'react';
import { render, screen } from '@testing-library/react';
import {shallow} from 'enzyme'
import {createMemoryHistory} from 'history'
import { Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import EmailPage from './EmailPage'

//tests that email page is rendered
it('render email page', () => {
  const history = createMemoryHistory()
  render(
    <Router history = {history}>
      <EmailPage />
    </Router>
  )
  expect(screen.getByText(/Email Page/i)).toBeInTheDocument()
  });



