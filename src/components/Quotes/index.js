import React, { useState, useEffect } from "react";

function Quotes({ id, url }) {
  const [newQuote, setNewQuote] = useState({ quote: { data: "" } });

  useEffect(() => {
    async function getRandomQuote() {
      const res = await fetch(`${url}quotes/${id}`);
      const data = await res.json();
      const { payload } = data;
      setNewQuote(payload[0].quote);
    }
    getRandomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
