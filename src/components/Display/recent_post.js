import React from "react";
import css from "../App/App.css"

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
              {JSON.stringify(newPostData.meeting_date)}
            </p>
            <p className="column">
              <b>Week:</b> {JSON.stringify(newPostData.week_topic)}
            </p>
          </div>
          <div className="row">
          <br></br>
            <p>
              <h2>What are you working on?</h2>{" "}
              <br></br>
              {JSON.stringify(newPostData.summary)}
            </p>
            <br></br>
            <p className="column">
              <b>What have you enjoyed?</b>
              <br></br> 
              {JSON.stringify(newPostData.wins)}
            </p>
            <p className="column">
              <h2>What are you struggling with?</h2>
              <br></br>
              {" "}
              {JSON.stringify(newPostData.challenges)}
            </p>
          </div>
          <div className="row">
            <p className="column">
              <h2>Upcoming goals:</h2> 
              <br></br>
              {JSON.stringify(newPostData.goals)}
            </p>
            <p className="column">
              <h2>General career/industry advice:</h2>
              <br></br>
              {JSON.stringify(newPostData.aspirations)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecentPost;
