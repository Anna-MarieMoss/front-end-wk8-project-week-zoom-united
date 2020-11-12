import React, { useState, useEffect } from "react";

function DateFilter({ filterHistoryDate }) {
  const [date, setDate] = useState("");

  console.log(date);

  return (
    <div>
      <h2>Filter by Date</h2>
      <br></br>
      <span>
        <input
          type="date"
          onChange={(event) => setDate(event.target.value)}
          placeholder="filter"
          name="filter-date"
        ></input>
        <button
          style={{
            display: "inline-block",
            fontSize: "10px",
            width: "60px",
            height: "25px",
            margin: "5px",
            backgroundColor: "rgb(120, 130, 134)",
          }}
          onClick={() => filterHistoryDate(date)}
        >
          Filter
        </button>
      </span>
    </div>
  );
}

export default DateFilter;
