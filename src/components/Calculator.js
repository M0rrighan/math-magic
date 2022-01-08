/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Display resultString="0" />
        <Buttons />
      </div>
    );
  }
}
