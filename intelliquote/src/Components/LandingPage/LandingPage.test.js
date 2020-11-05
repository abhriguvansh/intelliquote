import React from 'react';
import {
  getByTestId,
  getNodeText,
  render,
  screen,
  toContainElement,
  toBeInDocument,
  fireEvent,
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
  render(
    <Router history={history}>
      <LandingPage />
    </Router>
  );
  fireEvent.click(screen.getByText('Search'));
  expect(screen.getByTestId('quote-container')).toBeInDocument;
});

it('random button displays quote', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <LandingPage />
    </Router>
  );

  fireEvent.click(screen.getByText('Random'));
  expect(screen.getByTestId('quote-container')).toBeInDocument;
});
