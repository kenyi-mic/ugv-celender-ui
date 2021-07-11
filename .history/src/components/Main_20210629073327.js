import React from "react";
import "./Main.css";

class Main extends Component {
  state = { name: "Michael kenyi" };
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

const university = "university of global village (UGV)";
const town = "Barisal";
var universityName = university.toUpperCase();
var cityName = town.toUpperCase();

export default Main;
