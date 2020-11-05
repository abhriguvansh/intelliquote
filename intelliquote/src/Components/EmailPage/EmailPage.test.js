import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import EmailPage from './EmailPage';

//tests that email page is rendered
it('render email page', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <EmailPage />
    </Router>
  );
  expect(screen.getAllByText(/Email/i)[0]).toBeInTheDocument();
});

it('email page accepts input', () => {
  const history = createMemoryHistory();
  const wrapper = mount(
    <Router history={history}>
      <EmailPage />
    </Router>
  );
  expect(wrapper.find('input'));
});

it('clicking subscribe displays message', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <EmailPage />
    </Router>
  );

  fireEvent.click(screen.getByText('Subscribe'));
  expect(screen.getByText('Subscribe'));
});

it('clicking unsubscribe displays message', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <EmailPage />
    </Router>
  );

  fireEvent.click(screen.getByText('Unsubscribe'));
  expect(screen.getByText('Unsubscribe'));
});
