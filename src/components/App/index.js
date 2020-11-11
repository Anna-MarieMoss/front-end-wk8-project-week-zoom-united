import "./App.css";
import React, { useState } from "react";
import Quotes from "../Quotes/index";
import BootCamperRecord from "../Input/index.js"

function App() {
  const [id, setId] = useState(1);

  function getRandomId() {
    const randomId = Math.floor(Math.random() * 10) + 1;
    console.log(randomId);
    setId(randomId);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <p>Happy Project Week</p>
      </header> */}
      <Quotes id={id} />
        <button
          onClick={() => {
            getRandomId();
          }}
        >
          Inspire Me
        </button>

        <BootCamperRecord id={id} />
    </div>
  );
}

export default App;
