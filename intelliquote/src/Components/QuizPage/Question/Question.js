//displays a single question

import React  from 'react'
import PropTypes from 'prop-types'

const Question = props => {
    return(
        //render a div with an h1 that is a question
        <div>
            <h1 className = 'question-display'>{props.content}</h1>
            <br/>
        </div>
    )
}
Question.propTypes = {  
    question: PropTypes.array.isRequired
}

export default Question;
