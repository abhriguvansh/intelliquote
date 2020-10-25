
import React from 'react';
import {shallow} from 'enzyme'
import QuizPage from './QuizPage'

//tests that quiz page is rendered without crashing
it('renders without crashing', () => {
  shallow(<QuizPage />);
});

//generate left click action and use the quiz button on the navbar to test it works
it('test quiz button on navbar', () => {
  const history = createMemoryHistory()
  render(
    <Router history = {history}>
      <QuizPage />
    </Router>
  )

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/lll/i), leftClick)

  // check that the content changed to the new page 'I am the lift of the party' is one of the first things the user sees on the quiz page
  expect(screen.getByText(/I am relaxed most of the time/i)).toBeInTheDocument()
});


