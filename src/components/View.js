import React from "react";

const View = ({ name, age, pic, isNice, present, message }) => {
  return (
    <div>
      <h1>Check your input</h1>
      <div>
        <p>
          First name <span>{name}</span>
        </p>
        <p>
          Last name <span>{age}</span>
        </p>
        <p>
          Phonenumber <span>{pic}</span>
        </p>
        <p>
          Message <span>{isNice}</span>
        </p>
        <p>
          Role <span>{present}</span>
        </p>
      </div>
    </div>
  );
};

export default View;
