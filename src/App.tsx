import React from "react";
import "./App.css";
import PipeList from "./components/PipeList";

function App() {
  return (
    <div className="container App">
      <header className="App-header">
        <img
          src="https://files.readme.io/9e810f9-small-developers3x.png"
          className="App-logo"
          alt="logo"
        />
      </header>
      <PipeList />
    </div>
  );
}

export default App;
