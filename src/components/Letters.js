import React, { Component } from "react";
import Onekid from "./Onekid";
import axios from "axios";

export class Letters extends Component {
  state = {
    letters: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("http://localhost:5000/letters");
    this.setState({ letters: res.data, loading: false });
  }

  deleteLetter(id, e) {
    axios.delete(`http://localhost:5000/letters/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);

      const letters = this.state.letters.filter((item) => item.id !== id);
      this.setState({ letters });
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
