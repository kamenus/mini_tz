import React from 'react';

export default ({
  count,
  increaseCounter,
  decreaseCounter,
}) => (
  <div className="counter">
    <button
      onClick={decreaseCounter}
    >
      -
    </button>
    <span> {count} </span>
    <button
      onClick={increaseCounter}
    >
      +
    </button>
  </div>
)