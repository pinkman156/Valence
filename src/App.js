import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Demo from "./components/Demo";
export default function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      {token === "" ? (
        <Login token={token} setToken={setToken} />
      ) : token === "Demo" ? (
        <Demo />
      ) : (
        <Dashboard token={token} />
      )}
    </div>
  );
}
