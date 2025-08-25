import React from "react";
import { useState } from "react";
import ExpensiveCalculation from "./components/ExpensiveCalculation";

const App = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const submitForm = (e) => {
    e.preventDefault();

    if (!form.name || !form.email.includes("@")) {
      setError("Please Enter a valid name and email");
      return;
    }

    setError("");
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">Submit</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      <ExpensiveCalculation />
    </div>
  );
};

export default App;
