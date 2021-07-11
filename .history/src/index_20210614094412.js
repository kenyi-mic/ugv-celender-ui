import React, { Component } from "react";
import ReactDOM from "react-dom";

class Car extends Component {
  state = { count: 0, name: "Michael Kenyi" };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default Car;

ReactDOM.render(<Car />, document.getElementById("root"));
