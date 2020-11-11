import React, { useState, useEffect } from "react";

function Quotes({ id }) {
  const [newQuote, setNewQuote] = useState({ quote: { data: "" } });

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
    <div>
      <h2 className="quote">
        <u>Quote</u>
        <br></br> {JSON.stringify(newQuote)}
      </h2>
    </div>
  );
}
export default Quotes;
