
import React from 'react';
import {shallow} from 'enzyme'
import QuestionCount from './QuestionCount'

//tests that result is rendered without crashing
it('renders without crashing', () => {
  shallow(<QuestionCount counter = {1} total = {2}/>);
});

// //test that props are passed properly
// it('test props of Result', () => {
//     const result = shallow(<Results quizResult = 'TEST' />)
//     expect(result.text()).toEqual('You prefer TEST')
// })



