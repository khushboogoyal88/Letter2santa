import React from "react";

const Form = ({ submit, change, role }) => {
  return (
    <div className="row card card-panel hoverable">
      <form className="col s12" onSubmit={submit}>
        <div className="row">
          <div className="col s6">
            Name
            <div className="input-field inline">
              <input id="name" name="name" onChange={change} />
            </div>
          </div>
          <div className="col s6">
            Age
            <div className="input-field inline">
              <input id="age" name="age" onChange={change} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            Your picture here.
            <div className="input-field inline">
              <input id="pic" name="pic" onChange={change} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            Have you been nice this year?
            <div className="input-field inline">
              <input
                id="nice"
                className="validate"
                name="isNice"
                onChange={change}
              />
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
              <input
                id="gift"
                className="validate"
                name="present"
                onChange={change}
              />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Like a toy, barbie or book.
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
                  name="message"
                  onChange={change}
                ></textarea>
                <label for="textarea1">Write you letter here.</label>
              </div>
            </div>
          </form>
        </div>
        <button
          className="btn waves-effect waves-light modal-trigger"
          type="submit"
          name="submit"
        >
          Send It
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default Form;
