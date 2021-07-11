import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//Without jsx
class Student extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Name</th>
        </tr>

        <tr>
          <td>Michael</td>
          <td>Kenyi</td>
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
}

ReactDom.render(<Student />, document.getElementById("root"));
