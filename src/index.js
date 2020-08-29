import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.sass";
import Header from "./components/Header.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Welcome module bundler parcel</h1>
          <p>Happy coding</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
