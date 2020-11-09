import React, { useState } from "react";

const quotesArr = [
      "Every day may not be good but there is something good in every day!",
  //   {
  //     id: 2,
  //     text:
        "When things get tough remember: better days are coming.  They are called Saturday and Sunday.",
  //   },
  //   { id: 3, text: 
      "Choose to be optimistic.  It feels better.", 
    // },
  //   {
  //     id: 4,
  //     text:
        "Just in case no one told you today:  Good morning!  You are doing great.  I believe in you.  Nice butt.",
  //   },
  //   {
  //     id: 5,
  //     text:
        "Breathe.  Don't let a bad day make you feel like you have a bad life.",
  //   },
  //   {
  //     id: 6,
  //     text: 
        "A good laugh and a long sleep are the two best cures for anything.",
  //   },
  //   {
  //     id: 7,
  //     text: 
        "Do something today that you future self will thank you for.",
  //   },
  //   { id: 8, text: 
        "Start where you are. Use what you have. Do what you can.", 
      // },
  //   {
  //     id: 9,
  //     text:
        "Don’t wait for your feelings to change to take the action. Take the action and your feelings will change.",
  //   },
  //   {
  //     id: 10,
  //     text:
        "You measure the size of the accomplishment by the obstacles you had to overcome to reach your goals.",
  //   },
];

function Quotes() {
  const [newQuote, setNewQuote] = useState("");

  function getRandomQuote() {
    let randomQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)];
    setNewQuote(randomQuote);
    console.log(randomQuote);
    console.log(newQuote);
  }
  return (
    <div>
      <h2 className="quote"><u>Quote</u><br></br> "{newQuote}"<br></br></h2>
      <button
          onClick={() => {
            getRandomQuote();
          }}
        >
          Inspire Me
        </button>
      {/* <input onChange={getRandomQuote}></input> */}
    </div>
  );
}
export default Quotes;
