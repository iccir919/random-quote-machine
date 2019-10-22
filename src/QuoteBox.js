import React from "react";

function QuoteBox(props) {
  return (
    <div id="quote-box">
      <q id="text">{props.quoteEntry.quote}</q>
      <small id="author">{`- ${props.quoteEntry.character} played by ${props.quoteEntry.actor} in ${props.quoteEntry.film}`}</small>
      <button onClick={props.newQuote} id="new-quote">
        New Quote
      </button>
      <a id="tweet-quote" href="#">
        Tweet Quote
      </a>
    </div>
  );
}

export default QuoteBox;
