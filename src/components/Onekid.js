import React from "react";

const Onekid = ({ name, image, species }) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div
          className="card card-panel hoverable"
          style={{ width: "350px", height: "500px" }}
        >
          <div className="card-image">
            <img
              src={image}
              alt="kid_image"
              className="circle responsive-img"
            />
          </div>
          <div className="card-content">
            {name} ({species})
          </div>
          <div className="card-action">
            <button className="waves-effect waves-light btn">
              Read Letter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Onekid;
