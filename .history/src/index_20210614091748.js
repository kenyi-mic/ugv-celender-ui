import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { useState } from "react";

//Without jsx
function Student() {
  useState = state;
  state = {
    firstName: "Michael",
    lastName: "Kenyi",
  };

  return (
    <table>
      <tr>
        <th>Name</th>
      </tr>

      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
      </tr>
      <tr>
        <th>Age</th>
      </tr>
      <tr>
        <td>22 years</td>
        <td>old</td>
      </tr>
    </table>
  );
}

ReactDom.render(<Student />, document.getElementById("root"));
