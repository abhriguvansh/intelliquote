import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
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
  expect(screen.getByText(/LandingPage/i)).toBeInTheDocument();
});
