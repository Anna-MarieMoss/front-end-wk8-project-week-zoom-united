import React, { useState, useEffect } from "react";

function DateFilter({ filterHistoryDate }) {
  return (
    <div>
      <h2>Filter by Date</h2>
      <input
        type="date"
        onChange={(event) => filterHistoryDate(event.target.value)}
        placeholder="filter"
        name="filter-date"
      ></input>
    </div>
  );
}

export default DateFilter;
