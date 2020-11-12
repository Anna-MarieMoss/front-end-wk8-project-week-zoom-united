import React, { useState } from "react";

// import "./input.css";

function Filter({ setQuery, userIdSubmit, name, setName }) {
  const [memberId, setMemberId] = useState("");

  return (
    <div className="input-container">
      <h2>Please enter your login details</h2>
      <br></br>
      <input
        placeholder="Student ID No."
        maxLength={4}
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
      ></input>
      <input
        placeholder="First & Last Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <button
        onClick={() => {
          if (memberId && name) {
            setQuery(memberId);
            userIdSubmit();
          }
        }}
      >
        click me
      </button>
    </div>
  );
}

export default Filter;
