import React, { useState } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const updateState = (btnName) => {
    setState(() => calculate(state, btnName));
  };

  const { total, next, operation } = state;
  let resultString = '';
  if (total) {
    resultString = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    resultString = `${next} ${operation || ''}`;
  }

  return (
    <div className="container">
      <h2>Let&rsquo;s do some math!</h2>
      <div className="calculator">
        <Display resultString={resultString || 0} />
        <Buttons updateCalculator={updateState} />
      </div>
    </div>
  );
};

export default Calculator;
