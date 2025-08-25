import React, { useState, useMemo } from "react";

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // Expensive function (pretend it's heavy)
  const slowFunction = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // simulate heavy loop
    return num * 2;
  };

  // useMemo caches the result unless `count` changes
  const doubleNumber = useMemo(() => slowFunction(count), [count]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "10px",
    marginTop: "10px",
  };

  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

export default ExpensiveCalculation;
