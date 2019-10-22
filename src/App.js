import React from "react";
import QuoteBox from "./QuoteBox";

import allQuotes from "./quotes.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: Math.floor(Math.random() * allQuotes.data.length)
    };
  }

  newQuote() {
    this.setState({
      quoteIndex: Math.floor(Math.random() * allQuotes.data.length)
    });
  }

  render() {
    const quotes = allQuotes.data;
    return (
      <div>
        <QuoteBox
          newQuote={this.newQuote.bind(this)}
          quoteEntry={quotes[this.state.quoteIndex]}
        />
      </div>
    );
  }
}

export default App;
