import React from "react";
import "./App.css";
import Header from "./components/Header";
import Api from "./components/Api";
import Tab from "./components/Tab";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Tab />
      <Api />
      <Card />
    </div>
  );
}

export default App;
