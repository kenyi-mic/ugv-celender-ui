import React, { Component } from "react";
import ReactDOM from "react-dom";

class Car extends Component {
  state = { imageUrl: "https://picsum.photos/200" };
  render() {
    return (
      <div>
        <img src="https://picsum.photos/" alt="" />
        <h1>{}</h1>
      </div>
    );
  }
}

export default Car;

ReactDOM.render(<Car brand="Ford" />, document.getElementById("root"));
