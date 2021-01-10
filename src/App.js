import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav title="Letter2Santa" icon="email" />
        <Form />
      </div>
    );
  }
}

export default App;
