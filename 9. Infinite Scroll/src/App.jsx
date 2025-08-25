import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(Array.from({ length: 20 }, (_, i) => i + 1));

  const loadMore = () => {
    setData((prev) => [
      ...prev,
      ...Array.from({ length: 10 }, (_, i) => prev.length + i + 1),
    ]);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <ul>
      {data.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  );
};

export default App;
