
import React from 'react';
import {shallow} from 'enzyme'
import Quote from './Quote'

//tests that quote is rendered without crashing
it('renders without crashing', () => {
  shallow(<Quote quote = 'QUOTE' author = 'AUTHOR' />);
});

//test that props are passed properly
it('test props of Quote', () => {
    const result = shallow(<Quote quote = 'QUOTE' author = 'AUTHOR' />)
    expect(result.text()).toEqual('QUOTE-AUTHOR')
})



