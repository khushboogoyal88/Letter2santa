import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav title="Letter2Santa" icon="email" />
      </div>
    );
  }
}

export default App;
