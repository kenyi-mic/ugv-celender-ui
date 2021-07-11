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
        {/* The last part of the footer */}
        <div className="courses">
          <div className="dpt">
            <h2 className="txt">BSc in CSE</h2>
          </div>
          <div className="dpt">
            <h2 className="txt">BSc in EEE</h2>
          </div>
          <div className="dpt">
            <h2 className="txt">BSc in CIVIL</h2>
          </div>
          <div className="dpt">
            <h2 className="txt">BBA</h2>
          </div>
          <div className="dpt">
            <h2 className="txt">ENGLISH</h2>
          </div>
          <div className="dpt">
            <h2 className="txt">MBA</h2>
          </div>
          <div className="dpt emba">
            <h2 className="txt">EMBA</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
