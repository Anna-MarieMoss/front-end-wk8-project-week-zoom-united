import React, { useState, useEffect } from "react";

function DateFilter({ filterHistoryDate }) {
  return (
    <div>
      <p>Filter by Date</p>
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
