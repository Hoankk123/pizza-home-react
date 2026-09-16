import React, { useState } from 'react';

// Exercise 3: Build a counter application with buttons
// to increment and decrement the count.
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="exercise-block counter">
      <h2>Counter App</h2>
      <p className="counter-value">{count}</p>
      <div className="counter-buttons">
        <button onClick={decrement}>- Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+ Increment</button>
      </div>
    </div>
  );
}

export default Counter;
