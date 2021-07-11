import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
//import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends Component {
  state = {};
  render() {
    return <Header />;
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
