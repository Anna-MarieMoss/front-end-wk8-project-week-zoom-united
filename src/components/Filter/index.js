import React, { useState } from "react";

// import "./input.css";

function Filter({ setQuery, userIdSubmit, name, setName }) {
  const [memberId, setMemberId] = useState("");
  const [userNameText, setUserNameText] = useState("");

  function clearLoginInput() {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  }

  function handleKeyPress(event) {
    if (event.key === "Enter" && memberId && userNameText) {
      setQuery(memberId);
      setName(userNameText);
      userIdSubmit();
      clearLoginInput();
    }
  }

  return (
    <div className="input-container">
      <div className="notes inner">
        <h2>Please enter your login details</h2>
        <br></br>
        <input
          style={{ width: "50%" }}
          className="form-control-homepage"
          placeholder="Student ID No."
          maxLength={4}
          onChange={(e) => setMemberId(e.target.value)}
          onKeyPress={handleKeyPress}
        ></input>
        <br></br>
        <input
          style={{ width: "50%" }}
          className="form-control-homepage"
          onKeyPress={handleKeyPress}
          placeholder="Full Name"
          onChange={(e) => setUserNameText(e.target.value)}
        ></input>
        <br></br>
        <button
          onClick={() => {
            if (memberId && userNameText) {
              setQuery(memberId);
              setName(userNameText);
              userIdSubmit();
              clearLoginInput();
            }
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Filter;
