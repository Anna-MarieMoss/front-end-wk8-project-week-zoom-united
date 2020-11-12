import React from "react";
const moment = require("moment");

function RecentPost({ postBody }) {
  const newPostData = JSON.parse(postBody);
  return (
    <div>
      {newPostData && (
        <div className="notes">
          <div className="row">
            <h4>Name: {newPostData.name}</h4>
            <p className="column">
              <b>Date: </b>
              {moment(newPostData.meeting_date).format("Do MMMM YYYY")}
            </p>
            <p className="column">
              <b>Week:</b> {newPostData.week_topic}
            </p>
          </div>
          <div className="row">
            <p>
              <b>What are you working on?</b> {newPostData.summary}
            </p>

            <p className="column">
              <b>What have you enjoyed?</b> {newPostData.wins}
            </p>
            <p className="column">
              <b>What are you struggling with?</b> {newPostData.challenges}
            </p>
          </div>
          <div className="row">
            <p className="column">
              <b>Upcoming goals:</b> {newPostData.goals}
            </p>
            <p className="column">
              <b>General career/industry advice:</b>
              {newPostData.aspirations}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecentPost;
