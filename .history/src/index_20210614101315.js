import React, { Component } from "react";
import ReactDOM from "react-dom";

class Car extends Component {
  state = { imageUrl: "https://picsum.photos/200", count: 0 };
  render() {
    return (
      <div>
        <img src="https://picsum.photos/200" alt="" />
        <span>{this.state.count}</span>
        <button>Select</button>
      </div>
    );
  }
}

export default Car;

ReactDOM.render(<Car brand="Ford" />, document.getElementById("root"));
