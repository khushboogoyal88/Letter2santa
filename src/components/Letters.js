import React, { Component } from "react";
import Onekid from "./Onekid";
export class Letters extends Component {
  state = {
    letters: [
      {
        id: 1,
        name: "Khushboo",
        age: "5",
        pic: "http://source.unsplash.com/GagC07wVvck/1600x900",
        isNice: "yes",
        present: "toy",
        message: "Hello Santa",
      },
      {
        id: 2,
        name: "Deepesh",
        age: "5",
        pic: "http://source.unsplash.com/vKuEhorbvYI/1600x900",
        isNice: "yes",
        present: "toy",
        message: "Hello Santa",
      },
      {
        id: 3,
        name: "Mayank",
        age: "5",
        pic: "http://source.unsplash.com/qDY9ahp0Mto/1600x900",
        isNice: "yes",
        present: "toy",
        message: "Hello Santa",
      },
      {
        id: 4,
        name: "Ankur",
        age: "5",
        pic: "http://source.unsplash.com/qDY9ahp0Mto/1600x900",
        isNice: "yes",
        present: "toy",
        message: "Hello Santa",
      },
      {
        id: 5,
        name: "Kia",
        age: "4",
        pic: "http://source.unsplash.com/XRcEsQKTWGk/1600x900",
        isNice: "yes",
        present: "toy",
        message: "Hello Santa",
      },
      {
        id: 6,
        name: "Vihaan",
        age: "6",
        pic: "http://source.unsplash.com/_YfoApRxd4I/1600x900",
        isNice: "yes",
        present: "toy",
        message: "Hello Santa",
      },
    ],
  };
  render() {
    return (
      <div className="wrapper">
        <h2>All the Letters sent to Santa</h2>
        <div style={letterStyle}>
          {this.state.letters.map((kid) => (
            <Onekid key={kid.id} kid={kid} />
          ))}
        </div>
      </div>
    );
  }
}

const letterStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem",
};

export default Letters;
