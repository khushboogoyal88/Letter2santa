import React from "react";
import Onekid from "./Onekid";

const LettersGrid = ({ letters, isLoading }) => {
  return isLoading ? (
    <div className="progress spinner">
      <div className="indeterminate"></div>
    </div>
  ) : (
    <div style={letterStyle}>
      {letters.map((letter) => (
        <Onekid
          key={letter.id}
          name={letter.name}
          image={letter.image}
          species={letter.species}
        />
      ))}
    </div>
  );
};

const letterStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default LettersGrid;
