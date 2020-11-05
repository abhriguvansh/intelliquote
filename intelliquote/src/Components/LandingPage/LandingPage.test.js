import React from 'react';
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import { shallow } from 'enzyme';
=======
import { shallow, mount } from 'enzyme';
>>>>>>> e58832a744e11f22459bd14af62fe9b3d7fad01d
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import LandingPage from './LandingPage';
<<<<<<< HEAD
=======
import { expect } from 'chai';
>>>>>>> e58832a744e11f22459bd14af62fe9b3d7fad01d

//tests that landing page is rendered
it('render landing page', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <LandingPage />
    </Router>
  );
<<<<<<< HEAD
  expect(screen.getByText(/LandingPage/i)).toBeInTheDocument();
=======
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
>>>>>>> e58832a744e11f22459bd14af62fe9b3d7fad01d
});
