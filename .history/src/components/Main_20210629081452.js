import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  state = { university: "UNIVERSITY OF GLOBAL VILLAGE(UGV)", town: "BARISAL" };
  render() {
    return (
      <div>
        <div className="upper">
          <img src="../../ugv.jpg" alt="UGV LOGO" width="250px" />
          <div className="text">
            <h1 className="header">
              <strong>{this.state.university}</strong>
            </h1>
            <h2 className="city">{this.state.town}</h2>
            <p>{this.state.name}</p>
            <h2 className="subheader">
              THE FIRST <strong>SKILLED BASED HI-TECH</strong> UNIVERSITY IN
              BANGLADESH
            </h2>
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');
            </style>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
