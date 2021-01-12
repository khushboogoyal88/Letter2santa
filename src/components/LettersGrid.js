import React from "react";
import Onekid from "./Onekid";
import Loading from "./Loading";

const LettersGrid = ({ letters, isLoading }) => {
  return isLoading ? (
    <Loading />
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
