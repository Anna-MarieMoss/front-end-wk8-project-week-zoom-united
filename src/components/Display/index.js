import React, { useState, useEffect } from "react";
import css from "../App/App.css"
// import Filter from "../Filter/index"

function Display({
  query,
  userHistory,
  setUserHistory,
  setQuery,
  handleDelete,
  deleteId,
}) {
  // const [userHistory,setUserHistory] = useState([])
  // const [query, setQuery] = useState(null)
  // console.log(query);
  // console.log(userHistory);

  useEffect(() => {
    async function getUser() {
      const res = await fetch(`http://localhost:5000/notes/${query}`);
      const data = await res.json();
      const { payload } = data;
      setUserHistory(payload);
    }
    getUser();
  }, [query, deleteId]);

  return (
    <div className="user-viewer">
      <p>Displaying Notes History for SOC Student {query}</p>
      {/* <Filter setQuery={setQuery} /> */}
      <div>
        {userHistory.map((userHistory) => {
          return (
            <div className="notes inner">
              <div className="row">
                <h2>Name: {JSON.stringify(userHistory.name)}</h2>
                <br></br>
                <p className="column">
                  <b>Date: </b>
                  {JSON.stringify(userHistory.meeting_date)}
                </p>
                <p className="column">
                  <b>Week:</b>
                   {JSON.stringify(userHistory.week_topic)}
                </p>
              </div>
              <div className="row">
              <br></br>
                <p>
                  <h2>What are you working on?</h2>
                  <br></br>
                  {" "}
                  {JSON.stringify(userHistory.summary)}
                </p>
                <br></br>
                <p className="column">
                  <h2>What have you enjoyed?</h2>
                  <br></br>
                  {" "}
                  {JSON.stringify(userHistory.wins)}
                </p>
                <br></br>
                <p className="column">
                  <h2>What are you struggling with?</h2>
                  <br></br>
                  {" "}
                  {JSON.stringify(userHistory.challenges)}
                </p>
              </div>
              <div className="row">
              <br></br>
                <p className="column">
                  <h2>Upcoming goals:</h2> 
                  <br></br>
                  {JSON.stringify(userHistory.goals)}
                </p>
                <br></br>
                <p className="column">
                  <h2>General career/industry advice:</h2>
                  <br></br>
                  {JSON.stringify(userHistory.aspirations)}
                </p>
              </div>
              <div className="row">
                <p className="column">
                  <button onClick={() => handleDelete(userHistory.id)}>
                    Delete
                  </button>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h1>Filter Notes</h1>
      <br></br>
    </div>
  );
}

export default Display;
