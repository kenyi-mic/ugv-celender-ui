import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="logo">
            <img src="./../robotic.jpg" alt="" />
            <h5>Robotics Club</h5>
          </div>
          <div className="logo">
            <img src="./../business.jpg" alt="" />
            <h5>Robotics Club</h5>
          </div>
          <div className="logo">
            <img src="./../english.png" alt="" />
            <h5>Robotics Club</h5>
          </div>
          <div className="logo">
            <img src="./../debate.png" alt="" />
            <h5>Robotics Club</h5>
          </div>
          <div className="logo">
            <img src="./../coding.png" alt="" />
            <h5>Robotics Club</h5>
          </div>
          <div className="logo">
            <img src="./../blood donation.png" alt="" />
            <h5>Robotics Club</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
