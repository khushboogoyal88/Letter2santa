import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Letters from "./components/Letters";
import Form from "./components/Form";
import Popup from "./components/Popup";
import axios from "axios";

const App = () => {
  const [letter, setLetter] = useState({
    name: "",
    age: "",
    pic: "",
    isNice: "",
    present: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const changeHandler = (e) => {
    setLetter({
      ...letter,
      [e.target.name]: e.target.value,
    });
  };

  const popupHandler = (e) => {
    setShowPopup(true);
    e.preventDefault();
  };

  const submitHandler = () => {
    if (window.confirm("Should we send your letter to Santa?")) {
      axios.post("http://localhost:5000/letters", letter);
      window.location.reload();
    }
  };

  return (
    <Router>
      <div className="container wrapper ">
        <Nav title="Letter2Santa" icon="email" />
        <Switch>
          <Route exact path="/">
            <Fragment>
              <Form change={changeHandler} submit={submitHandler} />
              {showPopup && (
                <Popup
                  name={letter.name}
                  age={letter.age}
                  pic={letter.pic}
                  isNice={letter.isNice}
                  present={letter.present}
                  submit={submitHandler}
                />
              )}
            </Fragment>
          </Route>
          <Route path="/letters">
            <Letters />
          </Route>
          <Route path="/:user">
            <h3>User</h3>
          </Route>
          <Route>
            <h3>No Match</h3>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
