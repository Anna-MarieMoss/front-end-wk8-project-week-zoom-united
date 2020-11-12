import React, { useState, useEffect } from "react";

function DateFilter({ filterHistoryDate }) {
  const [date, setDate] = useState("");

  console.log(date);

  return (
    <div className="input-container">
      <div className="notes inner2">
        <h2>Filter by Date</h2>
        <br></br>
        <span>
          <input
            style={{ width: "175px", align: "center", display: "inline-block" }}
            className="form-control-homepage"
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
              height: "37px",
              margin: "5px",
              backgroundColor: "rgb(120, 130, 134)",
            }}
            onClick={() => filterHistoryDate(date)}
          >
            Filter
          </button>
        </span>
      </div>
    </div>
  );
}

export default DateFilter;
