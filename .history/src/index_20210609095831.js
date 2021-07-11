import React from "react";
import ReactDom from "react-dom";

//Without jsx
const myelement = React.createElement("h1", {}, "I dont like JSX!");

ReactDom.render(myelement, document.getElementById("winnie"));
