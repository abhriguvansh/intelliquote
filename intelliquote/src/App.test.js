import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

//tests that app is rendered
it('renders without crashing', () => {
  shallow(<App />);
});
