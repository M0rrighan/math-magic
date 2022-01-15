import React, { useState, useEffect } from 'react';

const Quote = () => {
  const pathToRandomMathQuote = 'https://random-math-quote-api.herokuapp.com/';
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch(pathToRandomMathQuote)
      .then((response) => response.json())
      .then((data) => setQuote({
        quoteText: data.quote,
        author: data.author,
      }));
  }, []);

  const quoteStyle = {
    fontSize: '1.5rem',
    marginTop: '4rem',
    padding: '1rem 3rem',
  };

  const { quoteText, author } = quote;

  return (
    <div style={quoteStyle}>
      <h2 style={{ paddingTop: '1rem' }}>Random Quote:</h2>
      <small style={{ color: '#777' }}>
        <span>Fetched from: </span>
        {pathToRandomMathQuote}
      </small>
      <p style={{ padding: '1.75rem 0' }}>
        {quoteText}
        {' - '}
        {author}
      </p>
    </div>
  );
};

export default Quote;
