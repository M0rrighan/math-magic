import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ updateCalculator, buttonName }) => {
  // const { updateCalculator, buttonName } = props;

  function handleClick() {
    updateCalculator(buttonName);
  }

  return (
    <button
      type="button"
      className="btn"
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  updateCalculator: PropTypes.func.isRequired,
};

export default Button;
