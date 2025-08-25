import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncre = () => {
    setCount(count + 1);
  };

  const handleDecr = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={handleIncre}>Increment</button>
      <button onClick={handleDecr}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
