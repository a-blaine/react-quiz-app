import React, { useState } from "react";
import axios from "axios";

export default function Quote() {
  const [displayedQuote, setDisplayedQuote] = useState({});
  const [allQuotes, setAllQuotes] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setAllQuotes(response.data);
    setDisplayedQuote({
      quote: response.data[0].text,
      author: response.data[0].author,
    });
    setLoaded(true);
  }

  function getNewQuote(quote) {
    let newDisplayedQuote = quote[Math.floor(Math.random() * allQuotes.length)];
    return setDisplayedQuote({
      quote: newDisplayedQuote.text,
      author: newDisplayedQuote.author,
    });
  }

  function updateQuote() {
    getNewQuote(allQuotes);
  }

  function load() {
    const apiUrl = "https://type.fit/api/quotes";
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Quote">
        <section>
          <h2>"{displayedQuote.quote}"</h2>
          <p>{displayedQuote.author}</p>
          <button onClick={updateQuote}>New quote</button>
        </section>
      </div>
    );
  } else {
    load();
    return <div>Loading..</div>;
  }
}
