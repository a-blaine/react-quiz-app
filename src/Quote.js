import React, { useState } from "react";
import axios from "axios";

export default function Quote() {
  const [quote, setQuote] = useState({});
  const [loaded, setLoaded] = useState(false);

  const handleResponse = (response) => {
    console.log(response.data);
    setQuote({
      quote: response.data[0].text,
      author: response.data[0].author,
    });
  };

  function load() {
    const apiUrl = "https://type.fit/api/quotes";
    axios.get(apiUrl).then(handleResponse);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Quote">
        <section>
          <h2>"{quote.quote}"</h2>
          <p>{quote.author}</p>
          <button>New quote</button>
        </section>
      </div>
    );
  } else {
    load();
    return <div>Loading..</div>;
  }
}
