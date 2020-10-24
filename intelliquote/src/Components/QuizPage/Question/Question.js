import React  from 'react'
import PropTypes from 'prop-types'

const Question = props => {
    return(
        <div>
            <h1 className = 'question-display'>{props.content}</h1>
        </div>
    )
}
Question.propTypes = {  
    content: PropTypes.string.isRequired
}

export default Question;
