import React from "react";

const Onekid = (props) => {
  const { id, pic, name, age, message } = props.letter;
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card card-panel hoverable" style={{ width: "350px" }}>
          <div className="card-image">
            <img src={pic} alt="kid_image" className="circle responsive-img" />
            <span className="card-title">
              {name}
              {", "}
              {age}
              {" yrs"}
            </span>
          </div>
          <div className="card-content">{message}</div>
          <div className="card-action">
            <button
              className="waves-effect waves-light btn"
              onClick={() => props.deleteLetter(id)}
            >
              Gift Sent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Onekid;
