import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//Without jsx
class Student extends React.component {
  render() {
    return <h1>Hello boys!!!!!</h1>;
  }
}

ReactDom.render(<Student />, document.getElementById("winnie"));
