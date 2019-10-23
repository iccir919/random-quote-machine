import React from "react";

function Controls(props) {
  const quote = props.quoteEntry.quote;
  const author = `- ${props.quoteEntry.character} played by ${props.quoteEntry.actor} in ${props.quoteEntry.film}`;
  const tweetURL = encodeURI(quote + " " + author);
  return (
    <div className="controls-container">
      <button className="button" onClick={props.newQuote} id="new-quote">
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={"https://twitter.com/intent/tweet?text=" + tweetURL}
      >
        <button className="button">Tweet Quote</button>
      </a>
    </div>
  );
}

export default Controls;
