import "../App/App.css";
import React from "react";

const moment = require("moment");

function RecentPost({ postBody }) {
  const newPostData = JSON.parse(postBody);
  return (
    <div>
      <br></br>
      {newPostData && (
        <div className="notes inner">
          <div className="row">
            <h2>Name: {newPostData.name}</h2>
            <br></br>
            <p className="column">
              <b>Date: </b>
              {moment(newPostData.meeting_date).format("Do MMMM YYYY")}
            </p>
            <p className="column">
              <b>Week:</b> {newPostData.week_topic}
            </p>
          </div>
          <div className="row">
            <br></br>
            <p>
              <h2>What are you working on?</h2> <br></br>
              {newPostData.summary}
            </p>
            <br></br>
            <p className="column">
              <b>What have you enjoyed?</b>
              <br></br>
              {newPostData.wins}
            </p>
            <p className="column">
              <h2>What are you struggling with?</h2>
              <br></br> {newPostData.challenges}
            </p>
          </div>
          <div className="row">
            <p className="column">
              <h2>Upcoming goals:</h2>
              <br></br>
              {newPostData.goals}
            </p>
            <p className="column">
              <h2>General career/industry advice:</h2>
              <br></br>
              {newPostData.aspirations}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecentPost;
