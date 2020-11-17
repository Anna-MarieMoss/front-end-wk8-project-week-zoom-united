import React, { useState } from "react";
import "../App/App.css";

function Form({ onClickfn, userId, name }) {
  const [formData, setFormData] = useState({
    user_id: userId,
    name: name,
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
      <h2>My Mentor Meeting Log</h2>
      <br></br>
      <form>
        <div className="form-group">
          <div className="form-wrapper">
            <h4>User ID: {userId}</h4>
            <h4>Name: {name}</h4>
            <br></br>
            {/* <input
              onChange={(event) => handleChange(event)}
              placeholder="user_id"
              type="number"
              name="user_id"
            ></input> */}
            {/* <input
              className="form-control"
              onChange={(event) => handleChange(event)}
              placeholder="name"
              type="text"
              name="name"
            ></input> */}
            <label htmlFor="meeting_date">Select meeting date</label>
            <input
              className="form-control"
              onChange={(event) => handleChange(event)}
              placeholder="meeting_date"
              type="date"
              name="meeting_date"
            ></input>
            <br></br>
            <label htmlFor="week_topic">Select the SoC week</label>
            <select
              className="form-control"
              id="week_topic"
              name="week_topic"
              onChange={(event) => handleChange(event)}
            >
              <option value="default">Select</option>
              <option value="Week 2 - Intro JS">Week 2 - Intro JS</option>
              <option value="Week 3 - Node Express">
                Week 3 - Node Express
              </option>
              <option value="Week 4 - Databases APIs">
                Week 4 - Databases APIs
              </option>
              <option value="Week 5 - OOP">Week 5 - OOP</option>
              <option value="Week 6 - React Basics">
                Week 6 - React Basics
              </option>
              <option value="Week 7 - Advanced React">
                Week 7 - Advanced React
              </option>
            </select>
          </div>
          <div>
            <textarea
              className="form-control2"
              rows="4"
              cols="60"
              onChange={(event) => handleChange(event)}
              placeholder="What has been covered this week?"
              type="text"
              name="summary"
            ></textarea>
            <br></br>
            <textarea
              className="form-control2"
              rows="4"
              cols="60"
              onChange={(event) => handleChange(event)}
              placeholder="What problems have you faced?"
              type="text"
              name="challenges"
            ></textarea>
            <br></br>

            <textarea
              className="form-control2"
              rows="4"
              cols="60"
              onChange={(event) => handleChange(event)}
              placeholder="Share some of your wins from this week"
              type="text"
              name="wins"
            ></textarea>
            <br></br>

            <textarea
              className="form-control2"
              rows="4"
              cols="60"
              onChange={(event) => handleChange(event)}
              placeholder="Set some goals for the week upcoming"
              type="text"
              name="goals"
            ></textarea>
            <br></br>

            <textarea
              className="form-control2"
              rows="4"
              cols="60"
              onChange={(event) => handleChange(event)}
              placeholder="Set some long term aspirations for the weeks ahead"
              type="text"
              name="aspirations"
            ></textarea>
            <br></br>
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
