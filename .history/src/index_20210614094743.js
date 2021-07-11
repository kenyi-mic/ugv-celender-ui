import React, { Component } from "react";
import ReactDOM from "react-dom";

class Car extends Component {
  state = { count: 0, name: "Michael Kenyi" };
  render() {
    return (
      <div>
        <h1>This car is a {this.props.brand}</h1>
      </div>
    );
  }
}

export default Car;

ReactDOM.render(<Car brand="Ford" />, document.getElementById("root"));
