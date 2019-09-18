import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Api from "./components/Api";

function App() {
  return (
    <div className="App">
      <Header />
      <Api />
    </div>
  );
}

export default App;
