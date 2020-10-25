
import React from 'react';
import {shallow} from 'enzyme'
import SuggestButton from './SuggestButton'

//tests that quote is rendered without crashing
it('renders without crashing', () => {
  shallow(<SuggestButton />);
});




