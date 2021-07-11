import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//Without jsx
const myelement = (
  <div>
    <ul>
      <li>
        <a href="https://">Home</a>
      </li>
      <li>
        <a href="https://">About</a>
      </li>
      <li>
        <a href="https://">Service</a>
      </li>
      <li>
        <a href="https://">FAQ</a>
      </li>
    </ul>
  </div>
);

ReactDom.render(myelement, document.getElementById("winnie"));
