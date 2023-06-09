import React, { useState } from "react";

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const apiUrl = "https://zenquotes.io/api/quotes/";

  return (
    <div className="Quote">
      <section>
        <h2>{quote}</h2>
        <button>New quote</button>
      </section>
    </div>
  );
}
