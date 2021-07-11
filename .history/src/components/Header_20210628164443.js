import React from "react";

function Header() {
  const header = "Outcome based education (obe) Project based learning (PBL)";
  var caps = header.toUpperCase();
  return (
    <div>
      <h1 className="title">{caps}</h1>
    </div>
  );
}

export default Header;
