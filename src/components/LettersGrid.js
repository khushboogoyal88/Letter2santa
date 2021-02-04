import React from "react";
import Onekid from "./Onekid";
import Loading from "./Loading";

const LettersGrid = ({ letters, isLoading, removeLetter }) => {
  return isLoading ? (
    <Loading />
  ) : (
    <div style={letterStyle}>
      {letters.map((letter) => (
        <Onekid
          key={letter._id}
          id={letter._id}
          name={letter.name}
          pic={letter.pic}
          age={letter.age}
          present={letter.present}
          message={letter.message}
          removeLetter={removeLetter}
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
