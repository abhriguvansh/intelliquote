import React from 'react';
import { shallow } from 'enzyme';
import QuizPage from './QuizPage';
import { createMemoryHistory } from 'history';
import LandingPage from '../LandingPage/LandingPage';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';

//tests that quiz page is rendered without crashing
it('renders without crashing', () => {
  shallow(<QuizPage />);
});

it('QMT-P1: choice 1 is the selection for option 1', () => {
  const history = createMemoryHistory();
  const search = render(
    <Router history={history}>
      <QuizPage />
    </Router>
  );

  fireEvent.click(screen.getByText('l'));
  fireEvent.click(screen.getByText('l'));
  fireEvent.click(screen.getByText('l'));
  fireEvent.click(screen.getByText('l'));

  expect(screen.getByText('Neuroticism')).toBeInDocument;
});

it('QMT-P2: choice 2 is the selection for option 2', () => {
  const history = createMemoryHistory();
  const search = render(
    <Router history={history}>
      <QuizPage />
    </Router>
  );

  fireEvent.click(screen.getByText('ll'));
  fireEvent.click(screen.getByText('ll'));
  fireEvent.click(screen.getByText('ll'));
  fireEvent.click(screen.getByText('ll'));

  expect(screen.getByText('Agreeableness')).toBeInDocument;
});

it('QMT-P3: choice 2 is the selection for option 2', () => {
  const history = createMemoryHistory();
  const search = render(
    <Router history={history}>
      <QuizPage />
    </Router>
  );

  fireEvent.click(screen.getByText('lll'));
  fireEvent.click(screen.getByText('lll'));
  fireEvent.click(screen.getByText('lll'));
  fireEvent.click(screen.getByText('lll'));

  expect(screen.getByText('A little bit of everything')).toBeInDocument;
});

it('QMT-O1: quiz returns a personality', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <QuizPage />
    </Router>
  );

  fireEvent.click(screen.getByText('lll'));
  fireEvent.click(screen.getByText('ll'));
  fireEvent.click(screen.getByText('l'));
  fireEvent.click(screen.getByText('l'));
  expect(screen.getByText('Openness')).toBeInDocument;
});
