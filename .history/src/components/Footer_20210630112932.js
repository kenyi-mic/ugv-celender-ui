import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="logo">
            <img src="./../robotic.jpg" alt="" width="100%" hight="25%" />
            <p>Robotics Club</p>
          </div>
          <div className="logo">
            <img src="./../business.jpg" alt="" />
            <p>
              Business Development <br /> society (BDS)
            </p>
          </div>
          <div className="logo">
            <img src="./../english.png" alt="" />
            <p>English Club</p>
          </div>
          <div className="logo">
            <img src="./../debate.png" alt="" />
            <p>Debate Club</p>
          </div>
          <div className="logo">
            <img src="./../coding.png" alt="" />
            <p>Programming club</p>
          </div>
          <div className="logo">
            <img src="./../bloodDonation.jpg" alt="" />
            <p>Blood Donors Club</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
