import React, { Component } from "react";
import Onekid from "./Onekid";
import axios from "axios";

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
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("http://localhost:5000/letters");
    this.setState({ letters: res.data, loading: false });
  }

  deleteLetter(id) {
    axios.delete(`http://localhost:5000/letters/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      //   const letters = this.state.letters.filter((item) => item.id !== id);
      //   this.setState({ letters });
    });
  }

  render() {
    return (
      <div className="wrapper">
        <h2>All the Letters sent to Santa</h2>
        <div style={letterStyle}>
          {this.state.letters.map((letter) => (
            <Onekid
              key={letter.id}
              letter={letter}
              deleteLetter={this.deleteLetter}
            />
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
