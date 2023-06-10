import React, { useState } from "react";
import axios from "axios";

export default function Quote() {
  const [displayedQuote, setDisplayedQuote] = useState({});
  const [allQuotes, setAllQuotes] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loaded, setLoaded] = useState(false);

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

  function handleResponse(response) {
    setAllQuotes(response.data);
    setDisplayedQuote({
      quote: response.data[0].text,
      author: response.data[0].author,
    });
    setLoaded(true);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function load() {
    const apiUrl = "https://type.fit/api/quotes";
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=nature`;
    const pexelsApiHeader =
      "wbS4pv9NuiHZ4u14GNmhWiymhtHjEbzVGjiwVmzmjKktYcpnXIoG2I3u";

    axios
      .get(pexelsApiUrl, { headers: { Authorization: pexelsApiHeader } })
      .then(handlePexelsResponse);
  }

  if (loaded) {
    return (
      <div className="Quote">
        <section>
          <h2>"{displayedQuote.quote}"</h2>
          <p>{displayedQuote.author}</p>
          <button onClick={updateQuote}>New quote</button>
        </section>
        <section>
          {photos.map((photo, index) => {
            return (
              <div key={index}>
                <img src={photo.src.landscape} alt="Relaxing nature" />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    load();
    return <div>Loading..</div>;
  }
}
