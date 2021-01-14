import React from "react";

const Onekid = ({ id, name, age, pic, message, present, removeLetter }) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card card-panel hoverable" style={{ width: "350px" }}>
          <div className="card-image">
            <img src={pic} alt="kid_image" className="circle responsive-img" />
          </div>
          <div className="card-content">
            {name} ({age} yrs)<p>Present wanted: {present}</p>
            <div>Letter: {message}</div>
          </div>
          <div className="card-action">
            <button
              className="waves-effect waves-light btn"
              onClick={() => {
                removeLetter(id);
              }}
            >
              Gift Sent Already
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Onekid;
