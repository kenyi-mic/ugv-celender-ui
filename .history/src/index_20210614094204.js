import React, { Component } from "react";
import ReactDOM from "react-dom";

class Car extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Here you go!</h1>
      </div>
    );
  }
}

export default Car;

ReactDOM.render(<Car />, document.getElementById("root"));
