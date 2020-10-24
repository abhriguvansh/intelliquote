import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      <h2 className = 'you-prefer'>You prefer</h2> <br/><strong className = 'personality'>{props.quizResult}</strong>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;