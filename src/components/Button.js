/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { updateCalculator, buttonName } = this.props;
    updateCalculator(buttonName);
  }

  render() {
    const { buttonName } = this.props;
    return (
      <button
        type="button"
        className="btn"
        onClick={this.handleClick}
      >
        {buttonName}
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  updateCalculator: PropTypes.func.isRequired,
};
