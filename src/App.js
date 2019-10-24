import React from "react";
import Quote from "./Quote";
import Poster from "./Poster";

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
      <div className="app">
        <Poster quoteEntry={quotes[this.state.quoteIndex]} />
        <Quote
          quoteEntry={quotes[this.state.quoteIndex]}
          newQuote={this.newQuote.bind(this)}
        />
      </div>
    );
  }
}

export default App;
