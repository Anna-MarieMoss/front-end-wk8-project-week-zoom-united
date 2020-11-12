import React, { useState } from "react";
import "../App/App.css"

function Form({ onClickfn, userId }) {
  const [formData, setFormData] = useState({
    user_id: userId,
    name: "",
    meeting_date: null,
    summary: "",
    challenges: "",
    wins: "",
    goals: "",
    aspirations: "",
  });

  console.log(formData);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }
  return (
    
    <div className="notes inner">
      <h2>My Meeting Log</h2>
      <h2>User ID: {userId}</h2>
      <br></br>
      <form>
      <div class="form-group">
				<div class="form-wrapper">
  
            {/* <input
              onChange={(event) => handleChange(event)}
              placeholder="user_id"
              type="number"
              name="user_id"
            ></input> */}
            <input class="form-control" 
              onChange={(event) => handleChange(event)}
              placeholder="name"
              type="text"
              name="name"
            ></input>
            <input class="form-control"
              onChange={(event) => handleChange(event)}
              placeholder="meeting_date"
              type="date"
              name="meeting_date"
            ></input>
            <label htmlFor="week_topic">Choose a week:</label>
            <select class="form-control"
              id="week_topic"
              name="week_topic"
              onChange={(event) => handleChange(event)}
            >
              <option value="default">Select</option>
              <option value="Week 2 - Intro JS">Week 2 - Intro JS</option>
              <option value="Week 3 - Node Express">Week 3 - Node Express</option>
              <option value="Week 4 - Databases APIs">
                Week 4 - Databases APIs
              </option>
              <option value="Week 5 - OOP">Week 5 - OOP</option>
              <option value="Week 6 - React Basics">Week 6 - React Basics</option>
              <option value="Week 7 - Advanced React">
                Week 7 - Advanced React
              </option>
            </select>
          </div>
          <div> 
                   
          <textarea  class="form-control2" rows="4" cols="60"
              onChange={(event) => handleChange(event)}
              placeholder="summary"
              type="text"
              name="summary"
            ></textarea>

            <textarea class="form-control2" rows="4" cols="60"
              onChange={(event) => handleChange(event)}
              placeholder="challenges"
              type="text"
              name="challenges"
            ></textarea>

            <textarea class="form-control2" rows="4" cols="60"
              onChange={(event) => handleChange(event)}
              placeholder="wins"
              type="text"
              name="wins"
            ></textarea>
            <textarea class="form-control2" rows="4" cols="60"
              onChange={(event) => handleChange(event)}
              placeholder="goals"
              type="text"
              name="goals"
            ></textarea>
            <textarea class="form-control2" rows="4" cols="60"
              onChange={(event) => handleChange(event)}
              placeholder="aspirations"
              type="text"
              name="aspirations"
            ></textarea>

        </div>
       </div>     
      </form>
      <button type="submit" onClick={() => onClickfn(formData)}>
        Submit
      </button>
      {/* <div class="column" style="background-color: rgb(71, 63, 64); color: snow">
              <h4>Course Schedule</h4>
              <img height=75% src="../images" />
              <p>Some text..</p>
        </div> */}
    </div>
  );
}

export default Form;
