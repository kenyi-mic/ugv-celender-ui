import React, { Component } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
  FaAt,
  FaFacebookSquare,
} from "react-icons/fa";

class Contact extends Component {
  render() {
    return (
      <div className="body">
        <div className="contacts">
          <span>
            {" "}
            <FaMapMarkerAlt className="map" /> 874/322, C&amp;B Road,
            Bangladesh.
          </span>

          <div className="contactIcons">
            <FaPhoneAlt className="phone" />
            <ul>
              <li>Tel: 0431-61521, 63503, 62715, 62765, 61374</li>
              <li>Mob: 01763877777, 01877774040, 01877774050</li>
              <li>
                01877774030, 01877774031, 01877774033, 01877774013, 01877774005
              </li>
              <li>
                01877774020, 01877774021, 01795205080, 01733336433, 01764100000
              </li>
            </ul>
          </div>
        </div>
        <div className="links">
          <FaGlobe className="globe" />
          <div className="site">
            <a href="https://www.ugv.edu.bd">www.ugv.edu.bd</a>
          </div>
          <FaAt className="at" />
          <div className="email">
            <a href="ugvbarisal@gmail.com">Email: ugvbarisal@gmail.com</a>
          </div>
          <FaFacebookSquare className="facebook" />
          <div className="social">
            <a href="https://www.facebook.com/ugvbarisal">
              facebook.com/ugvbarisal
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
