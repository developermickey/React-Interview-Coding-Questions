import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(query), 500);
    return () => clearTimeout(handler);
  }, [query]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />

      <p>Searching For: {debounced}</p>
    </div>
  );
};

export default App;
