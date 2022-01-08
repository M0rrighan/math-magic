/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
// eslint-disable-line import/no-extraneous-dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { resultString } = this.props;
    return (
      <div className="display">
        { resultString }
      </div>
    );
  }
}

Display.propTypes = {
  resultString: PropTypes.string.isRequired,
};
