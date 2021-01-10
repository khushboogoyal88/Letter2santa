import React, { useState } from "react";

const Form = () => {
  const [letter, setLetter] = useState({
    name: "",
    age: "",
    role: "",
  });

  return (
    <div className="row card card-panel hoverable">
      <form className="col s12">
        <div className="row">
          <div className="col s6">
            Name
            <div className="input-field inline">
              <input id="name" />
            </div>
          </div>
          <div className="col s6">
            Age
            <div className="input-field inline">
              <input id="age" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            Your picture here.
            <div className="input-field inline">
              <input id="pic" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            Have you been nice this year?
            <div className="input-field inline">
              <input id="nice" className="validate" />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Yes or No
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            What present do you want from Santa?
            <div className="input-field inline">
              <input id="gift" className="validate" />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Like a car, barbie or book.
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12 card">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  style={{ height: "200px" }}
                ></textarea>
                <label for="textarea1">Write you letter here.</label>
              </div>
            </div>
          </form>
        </div>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Send It
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default Form;
