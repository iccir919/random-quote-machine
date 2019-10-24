import React from "react";
import Controls from "./Controls";

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
      <Controls newQuote={props.newQuote} quoteEntry={props.quoteEntry} />
    </div>
  );
}

export default Quote;
