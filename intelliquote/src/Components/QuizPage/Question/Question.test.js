import React from 'react';
import { shallow } from 'enzyme';
import Question from './Question';

//tests that question is rendered without crashing
it('renders without crashing', () => {
  shallow(<Question content={['question1', 'question2', 'question3']} />);
});

//test that props are passed properly
it('test props of Question', () => {
  const result = shallow(
    <Question content={['question1', 'question2', 'question3']} />
  );
  result.debug();
  expect(result.text()).toEqual('question1question2question3');
});
