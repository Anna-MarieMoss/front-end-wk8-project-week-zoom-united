import React, { useState, useEffect } from "react";
import Display from "../Display/index";

function BootCamperRecord({
  query,
  userHistory,
  setQuery,
  setUserHistory,
  handleDelete,
  deleteId,
  filterHistoryDate,
  dateFilter,
  isDateFilter,
  removeDateFilter,
  name,
}) {
  const [note, setNote] = useState([]);
  useEffect(() => {
    async function getAllNotes() {
      const res = await fetch(`http://localhost:5000/notes`);

      const data = await res.json();
      const { payload } = data;
      setNote(payload);
    }
    getAllNotes();
  }, []);

  return (
    <div>
      <Display
        query={query}
        userHistory={userHistory}
        setQuery={setQuery}
        setUserHistory={setUserHistory}
        handleDelete={handleDelete}
        deleteId={deleteId}
        filterHistoryDate={filterHistoryDate}
        dateFilter={dateFilter}
        isDateFilter={isDateFilter}
        removeDateFilter={removeDateFilter}
        name={name}
      />
      {/* {note.map((note) => {
        return (
          <div className="notes">
            <div className="row">
              <h4>Name: {JSON.stringify(note.name)}</h4>
              <p className="column">
                <b>Date: </b>
                {JSON.stringify(note.meeting_date)}
              </p>
              <p className="column">
                <b>Week:</b> {JSON.stringify(note.week_topic)}
              </p>
            </div>
            <div className="row">
              <p>
                <b>What are you working on?</b> {JSON.stringify(note.summary)}
              </p>

              <p className="column">
                <b>What have you enjoyed?</b> {JSON.stringify(note.wins)}
              </p>
              <p className="column">
                <b>What are you struggling with?</b>{" "}
                {JSON.stringify(note.challenges)}
              </p>
            </div>
            <div className="row">
              <p className="column">
                <b>Upcoming goals:</b> {JSON.stringify(note.goals)}
              </p>
              <p className="column">
                <b>General career/industry advice:</b>
                {JSON.stringify(note.aspirations)}
              </p>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}
export default BootCamperRecord;
