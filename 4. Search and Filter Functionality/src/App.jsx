import React from "react";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const items = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

  const handleFilterData = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search whatever you want"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {handleFilterData.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
