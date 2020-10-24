
import React from 'react';
import {shallow} from 'enzyme'
import AnswerOption from './AnswerOption'

//tests that result is rendered without crashing
it('renders without crashing', () => {
    function test(){
        console.log('')
    }
  shallow(<AnswerOption answerType = 'A' answerContent = 'click here' answer = '' onAnswerSelected = {test()}   />);
});

// //test that props are passed properly
// it('test props of QuizCount', () => {
//     const result = shallow(<QuestionCount counter = {1} total = {2} />)
//     expect(result.text()).toEqual('Question 1 of 2')
// })



