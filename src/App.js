import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";
import axios from "axios";
import LettersGrid from "./components/LettersGrid";
import Search from "./components/Search";

const App = () => {
  const [letters, setLetters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const [letter, setLetter] = useState({
    name: "",
    age: "",
    pic: "",
    isNice: "",
    present: "",
    message: "",
  });

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character?name=${query}`
      );
      console.log(result.data.results);
      setLetters(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  const changeHandler = (e) => {
    setLetter({
      ...letter,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    if (window.confirm("Should we send your letter to Santa?")) {
      axios.post("http://localhost:5000/letters", letter);
      window.location.reload();
    }
  };

  const getQuery = (q) => {
    setQuery(q);
  };

  return (
    <Router>
      <Nav title="Letter2Santa" icon="email" />
      <div className="container wrapper ">
        <Switch>
          <Route exact path="/">
            <Fragment>
              <Form change={changeHandler} submit={submitHandler} />
            </Fragment>
          </Route>
          <Route path="/letters">
            <Search getQuery={getQuery} />
            <LettersGrid isLoading={isLoading} letters={letters} />
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
