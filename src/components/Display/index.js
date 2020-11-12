import React, { useState, useEffect } from "react";
import "../App/App.css";
import DateFilter from "./dateFilter";

// import Filter from "../Filter/index"
const moment = require("moment");

function Display({
  query,
  userHistory,
  setUserHistory,
  setQuery,
  handleDelete,
  deleteId,
  filterHistoryDate,
  dateFilter,
  isDateFilter,
  removeDateFilter,
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

  useEffect(() => {
    async function getUserDate() {
      const res = await fetch(
        `http://localhost:5000/notes/${query}?date=${dateFilter}`
      );
      const data = await res.json();
      const { payload } = data;
      setUserHistory(payload);
    }
    dateFilter && getUserDate();
  }, [dateFilter]);

  return (
    <div className="user-viewer">
      <a id="top"></a>
      <h2>Notes History for SOC Student {query}</h2>
      {/* <Filter setQuery={setQuery} /> */}
      {isDateFilter === false && (
        <div>
          <br></br>
          <DateFilter filterHistoryDate={filterHistoryDate} />
          <br></br>
          <h2>Showing all notes ☑️</h2>
          <br></br>
        </div>
      )}
      {isDateFilter && (
        <div>
          <br></br>
          <h2>
            Showing all notes since {moment(dateFilter).format("YYYY-MM-DD")} 📅
          </h2>
          <br></br>
          <button
            style={{
              backgroundColor: "rgb(120, 130, 134)",
            }}
            onClick={() => removeDateFilter()}
          >
            Remove Filter
          </button>
          <br></br>
        </div>
      )}
      <div>
        {userHistory.map((userHistory) => {
          return (
            <div key={userHistory.id} className="notes inner">
              <div className="row">
                <h2>Name: {userHistory.name}</h2>
                <br></br>
                <p className="column">
                  <b>Date: </b>
                  {moment(userHistory.meeting_date).format("Do MMMM YYYY")}
                </p>
                <p className="column">
                  <b>Week: </b>
                  {userHistory.week_topic}
                </p>
              </div>
              <div className="row">
                <br></br>
                <p>
                  <h2>What are you working on?</h2>
                  <br></br> {userHistory.summary.replace(/['"]+/g, "")}
                </p>
                <br></br>
                <p className="column">
                  <h2>What have you enjoyed?</h2>
                  <br></br> {userHistory.wins}
                </p>
                <br></br>
                <p className="column">
                  <h2>What are you struggling with?</h2>
                  <br></br> {userHistory.challenges}
                </p>
              </div>
              <div className="row">
                <br></br>
                <p className="column">
                  <h2>Upcoming goals:</h2>
                  <br></br>
                  {userHistory.goals}
                </p>
                <br></br>
                <p className="column">
                  <h2>General career/industry advice:</h2>
                  <br></br>
                  {userHistory.aspirations}
                </p>
              </div>
              <div className="row">
                <p className="column">
                  <br></br>
                  <a href="#top">Return to Top of Page</a>
                  <br></br>
                  <button onClick={() => handleDelete(userHistory.id)}>
                    Delete
                  </button>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <br></br>
    </div>
  );
}

export default Display;
