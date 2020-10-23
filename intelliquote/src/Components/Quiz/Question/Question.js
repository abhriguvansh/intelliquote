import React  from 'react'
import PropTypes from 'prop-types'

const Question = props => {
    return(
        <div>
            <h1>{props.content}</h1>
        </div>
    )
}
Question.PropTypes = {
    content: PropTypes.string.isRequired
}

export default Question;
