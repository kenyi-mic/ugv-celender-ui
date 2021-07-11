import React, { Component } from "react";
import ReactDOM from "react-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="h1">Hello, world</h1>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
