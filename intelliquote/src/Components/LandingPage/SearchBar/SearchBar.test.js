import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from './SearchBar';

//tests that email page is rendered
it('render searchbar', () => {
  shallow(<SearchBar />);
});

it('SVT-1: searchbar accepts input', () => {
  const wrapper = mount(<SearchBar />);
  expect(wrapper.find('input'));
});

