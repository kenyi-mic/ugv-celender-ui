import React, { Component } from "react";
import ReactDOM from "react-dom";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import Carousel from "./components/Carousel";
//import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <Header />
        <Main />
        <Contact />
        <Carousel />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
