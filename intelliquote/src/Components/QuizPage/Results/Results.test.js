
import React from 'react';
import {shallow} from 'enzyme'
import Results from './Results'
import { ExpansionPanelActions } from '@material-ui/core';

//tests that result is rendered without crashing
it('renders without crashing', () => {
  shallow(<Results />);
});

//
it('test props of Result', () => {
    const result = shallow(<Results quizResult = 'TEST' />)
    expect(result.text()).toEqual('You prefer TEST')
})



