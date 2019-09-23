import React from "react";
import "./App.css";
import Header from "./components/Header";
import Api from "./components/Api";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Api />
      </header>
    </div>
  );
}

export default App;
