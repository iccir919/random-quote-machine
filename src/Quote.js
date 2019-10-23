import React from "react";

function Quote(props) {
  const quoteEntry = props.quoteEntry;
  return (
    <div id="quote-box">
      <p id="text">{quoteEntry.quote}</p>
      <p id="author">
        - {quoteEntry.character}
        <small>
          , played by {quoteEntry.actor} in{" "}
          <a href={quoteEntry.filmLink}>{quoteEntry.film}</a>
        </small>
      </p>
    </div>
  );
}

export default Quote;
