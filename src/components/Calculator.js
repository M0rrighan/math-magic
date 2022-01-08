/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(btnName) {
    const { total, next, operation } = this.state;
    this.setState(() => calculate({ total, next, operation }, btnName));
  }

  render() {
    const { total, next, operation } = this.state;
    let resultString = '';
    if (total) {
      resultString = `${total} ${operation || ''} ${next || ''}`;
    } else if (next) {
      resultString = `${next} ${operation || ''}`;
    }

    return (
      <div className="calculator">
        <Display resultString={resultString || 0} />
        <Buttons updateCalculator={this.updateState} />
      </div>
    );
  }
}
