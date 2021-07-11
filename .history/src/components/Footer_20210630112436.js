import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="logo">
            <img src="./../robotic.jpg" alt="" width="200px" hight="50px" />
            <h5>Robotics Club</h5>
          </div>
          <div className="logo">
            <img src="./../business.jpg" alt="" />
            <p>Robotics Club</p>
          </div>
          <div className="logo">
            <img src="./../english.png" alt="" />
            <p>Robotics Club</p>
          </div>
          <div className="logo">
            <img src="./../debate.png" alt="" />
            <p>Robotics Club</p>
          </div>
          <div className="logo">
            <img src="./../coding.png" alt="" />
            <p>Robotics Club</p>
          </div>
          <div className="logo">
            <img src="./../bloodDonation.jpg" alt="" />
            <p>Robotics Club</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
