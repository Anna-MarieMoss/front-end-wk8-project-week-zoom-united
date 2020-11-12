import React, { useState, useEffect } from "react";

function DateFilter({ filterHistoryDate }) {
  return (
    <div className="input-container">
    <div className="notes inner2">
      <h2>Filter by Date</h2>
      <br></br>
      <input style={{width: "300px", align: "center"}} className="form-control-homepage"
        type="date"
        onChange={(event) => filterHistoryDate(event.target.value)}
        placeholder="filter"
        name="filter-date"
      ></input>
    </div>
    </div>
  );
}

export default DateFilter;
