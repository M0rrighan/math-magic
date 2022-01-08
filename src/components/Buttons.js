/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Button from './Button';

export default class Buttons extends Component {
  render() {
    const buttonNames = [
      'AC', '+/-', '%', '/',
      '7', '8', '9', 'X',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ];

    const buttons = buttonNames.map((btnName) => (
      <Button key={btnName} buttonName={btnName} />
    ));
    return (
      <div className="buttons">
        {buttons}
      </div>
    );
  }
}
