import React from "react";

function Header() {
  const header = "Outcome based education (obe) Project based learning (PBL)";
  var caps = header.toUpperCase();
  return (
    <div>
      <h2>{caps}</h2>
    </div>
  );
}

export default Header;
