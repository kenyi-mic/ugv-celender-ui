import React, { Component } from "react";
import ReactDOM from "react-dom";

class Car extends Component {
  state = { imageUrl: "https://picsum.photos/200" };
  render() {
    return (
      <div>
        <h1>{this.state.imageUrl}</h1>
      </div>
    );
  }
}

export default Car;

ReactDOM.render(<Car brand="Ford" />, document.getElementById("root"));
