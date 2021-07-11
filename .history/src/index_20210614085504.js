import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//Without jsx
function Student() {
  const firstName = "Michael";
  const lastName = "Kenyi";
  return (
    <table>
      <tr>
        <th>Name</th>
      </tr>

      <tr>
        <td>{this.firstName}</td>
        <td>{lastName}</td>
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
