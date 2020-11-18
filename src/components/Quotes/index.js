import React, { useState, useEffect } from "react";

function Quotes({ id }) {
  const [newQuote, setNewQuote] = useState();

  useEffect(() => {
    async function getRandomQuote() {
      const res = await fetch(`http://localhost:5000/quotes/${id}`);
      const data = await res.json();
      const { payload } = data;
      setNewQuote(payload[0].quote);
    }
    getRandomQuote();
  }, [id]);

  return (
    <div className="quote">
      {/* <h2 > */}
      {/* <u>Quote</u> */}
      <h3>{JSON.stringify(newQuote)}</h3>
      {/* </h2> */}
    </div>
  );
}
export default Quotes;
