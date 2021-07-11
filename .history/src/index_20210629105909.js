import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";
//import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <Header />
        <Main />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
