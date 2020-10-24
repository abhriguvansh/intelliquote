
import React from 'react';
import {shallow} from 'enzyme'
import QuizPage from './QuizPage'

//tests that quiz page is rendered without crashing
it('renders without crashing', () => {
  shallow(<QuizPage />);
});



