import React from "react";

const closeHandler = () => {
  window.location.reload();
};

const Popup = ({ name, age, pic, isNice, present, submit }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>Your note:</h1>
        <div>
          <p>
            First name: <span>{name}</span>
          </p>
          <p>
            Last name: <span>{age}</span>
          </p>
          <p>
            Phonenumber: <span>{pic}</span>
          </p>
          <p>
            Message: <span>{isNice}</span>
          </p>
          <p>
            Role: <span>{present}</span>
          </p>
          <button onClick={submit}>Yes, I am sure</button>
          <button onClick={closeHandler}>Nope, don't want to post it</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
