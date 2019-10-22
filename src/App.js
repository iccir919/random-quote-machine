import React from "react";

import quotes from "./quotes.js";
import "./App.css";

class App extends React.Component {
  render() {
    console.log(quotes.data.length);
    return <div></div>;
  }
}

export default App;
