import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
export default function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const HandleCHange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      email: "",
      password: "",
    });
  };
  console.log(form);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Name</label>
          <input
            onChange={HandleCHange}
            id="email"
            value={form.email}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={HandleCHange}
            id="password"
            value={form.password}
            type="password"
          />
        </div>
        <button type="submit">Button</button>
      </form>
    </div>
  );
}
