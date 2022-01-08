/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonNames = [
      'AC', '+/-', '%', '÷',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ];

    const { updateCalculator } = this.props;

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
  }
}

Buttons.propTypes = {
  updateCalculator: PropTypes.func.isRequired,
};
