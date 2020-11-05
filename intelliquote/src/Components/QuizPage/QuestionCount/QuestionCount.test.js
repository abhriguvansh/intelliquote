import React from 'react';
import { shallow } from 'enzyme';
import QuestionCount from './QuestionCount';

//tests that result is rendered without crashing
it('renders without crashing', () => {
  shallow(<QuestionCount counter={1} total={2} />);
});

//test that props are passed properly
it('test props of QuizCount', () => {
  const result = shallow(<QuestionCount counter={1} total={2} />);
  expect(result.text()).toEqual('Question 1 of 2');
});
