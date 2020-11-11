import React from "react";

function RecentPost({ userHistory }) {
  return (
    <div className="notes">
      <div className="row">
        <h4>Name: {JSON.stringify(userHistory[0].name)}</h4>
        <p className="column">
          <b>Date: </b>
          {JSON.stringify(userHistory[0].meeting_date)}
        </p>
        <p className="column">
          <b>Week:</b> {JSON.stringify(userHistory[0].week_topic)}
        </p>
      </div>
      <div className="row">
        <p>
          <b>What are you working on?</b>{" "}
          {JSON.stringify(userHistory[0].summary)}
        </p>

        <p className="column">
          <b>What have you enjoyed?</b> {JSON.stringify(userHistory[0].wins)}
        </p>
        <p className="column">
          <b>What are you struggling with?</b>{" "}
          {JSON.stringify(userHistory[0].challenges)}
        </p>
      </div>
      <div className="row">
        <p className="column">
          <b>Upcoming goals:</b> {JSON.stringify(userHistory[0].goals)}
        </p>
        <p className="column">
          <b>General career/industry advice:</b>
          {JSON.stringify(userHistory[0].aspirations)}
        </p>
      </div>
    </div>
  );
}

export default RecentPost;
