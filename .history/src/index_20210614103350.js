import React, { Component } from "react";
import ReactDOM from "react-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

class Car extends Component {
  state = {};
  render() {
    return <h2>I am a {this.props.brand}</h2>;
  }
}

class Garage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car brand="Ford" />
      </div>
    );
  }
}

const element = <Garage />;

ReactDOM.render(element, document.getElementById("root"));
