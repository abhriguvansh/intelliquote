import React from 'react';
import { shallow } from 'enzyme';
import AnswerOption from './AnswerOption';

//tests that result is rendered without crashing
it('renders without crashing', () => {
  function test() {
    //
  }
  shallow(
    <AnswerOption
      answerType='A'
      answerContent='click here'
      answer=''
      onAnswerSelected={test()}
    />
  );
});

//test that props are passed properly
it('test props of AnswerOption', () => {
  const result = shallow(
    <AnswerOption
      answerType='A'
      answerContent='click here'
      answer=' '
      onAnswerSelected={test}
    />
  );
  expect(result.text()).toEqual('click here');
});
