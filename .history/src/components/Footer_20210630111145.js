import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
          <div className="logo">
            <img src="./../robotic.jpg" alt="" />
            <h4>Robotics Club</h4>
          </div>
          <div className="logo">
            <img src="./../business.jpg" alt="" />
            <h4>Robotics Club</h4>
          </div>
          <div className="logo">
            <img src="./../english.png" alt="" />
            <h4>Robotics Club</h4>
          </div>
          <div className="logo">
            <img src="./../debate.png" alt="" />
            <h4>Robotics Club</h4>
          </div>
          <div className="logo">
            <img src="./../coding.png" alt="" />
            <h4>Robotics Club</h4>
          </div>
          <div className="logo">
            <img src="./../blood donation.png" alt="" />
            <h4>Robotics Club</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
