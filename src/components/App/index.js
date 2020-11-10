import "./App.css";
import React, { useState } from "react";
import Quotes from "../Quotes/index";

function App() {
  const [id, setId] = useState("");

  function getRandomId() {
    let randomId = Math.floor(Math.random() * 10) + 1;
    console.log(randomId);
    setId(randomId);
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          getRandomId();
        }}
      >
        Inspire Me
      </button>
      <Quotes id={id} />
    </div>
  );
}

export default App;
