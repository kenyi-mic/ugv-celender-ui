import React from "react";
import ReactDom from "react-dom";

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Michael</td>
    </tr>
    <tr>
      <td>Kenyi</td>
    </tr>
  </table>
);

ReactDom.render(myelement, document.getElementById("root"));
