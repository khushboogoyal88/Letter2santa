import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";
import View from "./components/View";
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
    axios.post("http://localhost:5000/letters", letter);
    window.location.reload();
  };

  return (
    <div className="App">
      <Nav title="Letter2Santa" icon="email" />
      <Form change={changeHandler} submit={submitHandler} />
      <View
        name={letter.name}
        age={letter.age}
        pic={letter.pic}
        isNice={letter.isNice}
        present={letter.isPresent}
        meassgae={letter.message}
      />
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
    </div>
  );
};

export default App;
