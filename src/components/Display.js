import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ resultString }) => (
  <div className="display">
    { resultString }
  </div>
);

Display.propTypes = {
  resultString: PropTypes.string.isRequired,
};

export default Display;
