import React from "react";

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
              {JSON.stringify(newPostData.meeting_date)}
            </p>
            <p className="column">
              <b>Week:</b> {JSON.stringify(newPostData.week_topic)}
            </p>
          </div>
          <div className="row">
            <p>
              <b>What are you working on?</b>{" "}
              {JSON.stringify(newPostData.summary)}
            </p>

            <p className="column">
              <b>What have you enjoyed?</b> {JSON.stringify(newPostData.wins)}
            </p>
            <p className="column">
              <b>What are you struggling with?</b>{" "}
              {JSON.stringify(newPostData.challenges)}
            </p>
          </div>
          <div className="row">
            <p className="column">
              <b>Upcoming goals:</b> {JSON.stringify(newPostData.goals)}
            </p>
            <p className="column">
              <b>General career/industry advice:</b>
              {JSON.stringify(newPostData.aspirations)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecentPost;
