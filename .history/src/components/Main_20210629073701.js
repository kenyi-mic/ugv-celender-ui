import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  state = { university: "university of global village (UGV)", town: "Barisal" };
  render() {
    return (
      <div>
        <div className="upper">
          <img src="" alt="" />
          <h1 className="header">
            <strong>{universityName}</strong>
          </h1>
          <h2 className="city">{cityName}</h2>
          <p>{this.state.name}</p>
          <h2 className="subheader">
            THE FIRST <strong>SKILLED BASED HI-TECH</strong> UNIVERSITY IN
            BANGLADESH
          </h2>
        </div>
      </div>
    );
  }
}

var universityName = university.toUpperCase();
var cityName = town.toUpperCase();

export default Main;
