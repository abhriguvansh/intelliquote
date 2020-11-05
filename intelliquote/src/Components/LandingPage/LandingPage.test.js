import React from 'react';
import {
  getByTestId,
  getNodeText,
  render,
  screen,
  toContainElement,
} from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import LandingPage from './LandingPage';

//tests that landing page is rendered
it('render landing page', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <LandingPage />
    </Router>
  );
  expect(screen.getByText(/LandingPage/i));
});

it('searchbar returns quotes', () => {
  const history = createMemoryHistory();
  const search = render(
    <Router history={history}>
      <LandingPage />
    </Router>
  );
  userEvent.type(screen.getByLabelText('Search For A Quote'), 'gates');
  screen.getByText('Search').click();
  const quoteDiv = screen.getByTestId('quote-container');
  const quotes = screen.getByTestId('quote-div');
  expect(quoteDiv).toContainElement(quotes);
});
