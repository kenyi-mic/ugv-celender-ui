import React, { Component } from "react";
import ReactDOM from "react-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

class Car extends Component {
  state = {};
  render() {
    return <h2>This is a {this.props.brand}</h2>;
  }
}

class Garage extends Component {
  state = {};
  render() {
    const carname = "Ford";
    return (
      <div>
        <h1>Who is in backyard</h1>
        <Car brand={carname} />;
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById("root"));
