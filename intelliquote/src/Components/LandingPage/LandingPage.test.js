import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import LandingPage from './LandingPage';
import { expect } from 'chai';

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
  const search = mount(
    <Router history={history}>
      <LandingPage />
    </Router>
  );
  search.find('');
  expect(search.find('quote-div')).to.have.lengthOf(1);
});
