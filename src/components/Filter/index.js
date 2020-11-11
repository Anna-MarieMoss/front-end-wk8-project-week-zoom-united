import React, { useState } from "react";
// import "./input.css";

function Filter({ setQuery }) {
  const [memberId, setMemberId] = useState("");
  return (
    <div className="input-container">
      <input value={memberId} onChange={(e) => setMemberId(e.target.value)}></input>

      <button onClick={() => setQuery(memberId)}>click me</button>
    </div>
  );
}

export default Filter;