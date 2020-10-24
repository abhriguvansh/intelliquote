
import React from 'react';
import {shallow} from 'enzyme'
import Quiz from './Quiz'

//tests that quiz is rendered without crashing
it('renders without crashing', () => {
  shallow(<Quiz />);
});

//
it('test props of Result', () => {
    const result = shallow(<Results quizResult = 'TEST' />)
    expect(result.text()).toEqual('You prefer TEST')
})



