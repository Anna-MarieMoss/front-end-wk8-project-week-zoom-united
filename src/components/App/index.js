import "./App.css";
import React, { useEffect, useState } from "react";
import Quotes from "../Quotes/index";
import BootCamperRecord from "../Input/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../HomePage";
import MyHistoryPage from "../MyHistoryPage";
import Form from "../Form";

function App() {
  const [id, setId] = useState("");
  const [postBody, setPostBody] = useState();
  console.log(postBody);
  function getRandomId() {
    let randomId = Math.floor(Math.random() * 10) + 1;
    setId(randomId);
  }
  function addToPost(formData) {
    const newFormData = JSON.stringify(formData);
    setPostBody(newFormData);
  }
  useEffect(() => {
    async function addToDB() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: postBody,
      };
      fetch(`http://localhost:5000/notes/`, requestOptions);
    }
    postBody && addToDB();
  }, [postBody]);

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
            <Link to="/agenda"> My agenda </Link>
            <Link to="/history"> My history </Link>
          </nav>
          <Switch>
            <Route path="/agenda"></Route>
            <Route path="/history">
              <BootCamperRecord id={id} />
              <MyHistoryPage />
            </Route>
            <Route path="/">
              <HomePage />
              <Form onClickfn={addToPost} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
