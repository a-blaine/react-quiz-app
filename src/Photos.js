import React, { useState } from "react";
import "./Photos.css";

export default function Photos({ photos }) {
  const [background, setBackground] = useState(null);

  function handleClick(bg) {
    let newBackground = bg;
    setBackground(newBackground);
  }

  if (background) {
    return (
      <div className="bg-photo">
        <img src={background} alt="Nature background" />
      </div>
    );
  } else {
    return (
      <section className="Photos">
        <p>Pick a background for your quote!</p>
        <br />
        <div className="grid">
          {photos.map((photo, index) => {
            if (index > 4 && index < 11) {
              return (
                <div key={index}>
                  <a href="/" onClick={handleClick(photo.src.landscape)}>
                    <img src={photo.src.landscape} alt="Relaxing nature" />
                  </a>
                </div>
              );
            }
          })}
        </div>
      </section>
    );
  }
}
