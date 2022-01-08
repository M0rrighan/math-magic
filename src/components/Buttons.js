import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Buttons = ({ updateCalculator }) => {
  const buttonNames = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  const buttons = buttonNames.map((btnName) => (
    <Button
      key={btnName}
      buttonName={btnName}
      updateCalculator={updateCalculator}
    />
  ));

  return (
    <div className="buttons">
      {buttons}
    </div>
  );
};

Buttons.propTypes = {
  updateCalculator: PropTypes.func.isRequired,
};

export default Buttons;
