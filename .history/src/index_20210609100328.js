import React from "react";
import ReactDom from "react-dom";

//Without jsx
const myelement = (<h1>Hey buddy, what is the answer of {80023 % 8 }, please let me know.</h1>);

ReactDom.render(myelement, document.getElementById("winnie"));
