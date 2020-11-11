import React, { useState, useEffect } from "react";
import Filter from "../Filter/index"

function Display({query, userHistory, setUserHistory, setQuery}){
// const [userHistory,setUserHistory] = useState([])
// const [query, setQuery] = useState(null)
console.log(query)
console.log(userHistory)

useEffect(() => {
    async function getUser() {
      const res = await fetch(`http://localhost:5000/notes/${query}`)
      const data = await res.json();
      const { payload } = data;
      console.log(payload)
      setUserHistory(payload);
     
    }
    getUser();
  }, [query]);

  return (
    <div className="user-viewer">
      <p>display SOC Student with id {query} here!</p>
      <Filter setQuery={setQuery} />
      <div>
{userHistory.map((userHistory) => {
    return (
      <div className="notes">
        <div className="row">
          <h4>Name: {JSON.stringify(userHistory.name)}</h4>
          <p className="column">
            <b>Date: </b>
            {JSON.stringify(userHistory.meeting_date)}
          </p>
          <p className="column">
            <b>Week:</b> {JSON.stringify(userHistory.week_topic)}
          </p>
        </div>
        <div className="row">
          <p>
            <b>What are you working on?</b> {JSON.stringify(userHistory.summary)}
          </p>

          <p className="column">
            <b>What have you enjoyed?</b> {JSON.stringify(userHistory.wins)}
          </p>
          <p className="column">
            <b>What are you struggling with?</b>{" "}
            {JSON.stringify(userHistory.challenges)}
          </p>
        </div>
        <div className="row">
          <p className="column">
            <b>Upcoming goals:</b> {JSON.stringify(userHistory.goals)}
          </p>
          <p className="column">
            <b>General career/industry advice:</b>
            {JSON.stringify(userHistory.aspirations)}
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



