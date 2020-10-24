
import React from 'react';
import {shallow} from 'enzyme'
import Question from './Question'

//tests that question is rendered without crashing
it('renders without crashing', () => {
  shallow(<Question content = {['question1', 'question2', 'question3']}/>);
});

// //test that props are passed properly
// it('test props of QuizCount', () => {
//     const result = shallow(<QuestionCount counter = {1} total = {2} />)
//     expect(result.text()).toEqual('Question 1 of 2')
// })



