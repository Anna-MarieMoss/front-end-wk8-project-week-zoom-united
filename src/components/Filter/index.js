import React, { useState } from "react";

// import "./input.css";

function Filter({ setQuery, userIdSubmit, name, setName}) {
  const [memberId, setMemberId] = useState("");

  return (
    <div className="input-container">
      <h2>Please enter your Student ID Number</h2>
      <br></br>
      <input
        type="number"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
      ></input>
       <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <button onClick={() =>{ 
        if (memberId && name){
          setQuery(memberId)
        userIdSubmit()
        
        }
        
        }}>click me</button>
    </div>
  );
}

export default Filter;
