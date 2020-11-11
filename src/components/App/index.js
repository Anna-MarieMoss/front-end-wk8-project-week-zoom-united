import "./App.css";
import React, { useState } from "react";
import Quotes from "../Quotes/index";
import BootCamperRecord from "../Input/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../HomePage";
import MyHistoryPage from "../MyHistoryPage";


function App() {
  const [id, setId] = useState("");
  const [userHistory,setUserHistory] = useState([])
const [query, setQuery] = useState(null)
  // const [userId, setUserId] = useState("");
  function getRandomId() {
    let randomId = Math.floor(Math.random() * 10) + 1;
    console.log(randomId);
    setId(randomId);
  }



  
  return (
    <div className="App">
      <Quotes id={id} />
      <button
        className="button"
        onClick={() => {
          getRandomId();
        }}
      >
        Inspire Me
      </button>
      <Router>
        <div className="App">
          <nav className="nav-bar">
            <Link to="/">Home </Link>
            <span></span>
            {/* <Link to="/agenda"> My agenda </Link> */}
            <Link to="/history"> My history </Link>
          </nav>
          <Switch>
            {/* <Route path="/agenda">
              <MyAagenda />
            </Route> */}
            <Route path="/history">
              <BootCamperRecord id={id} query={query} userHistory={userHistory} setQuery={setQuery} setUserHistory={setUserHistory} />
             
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
