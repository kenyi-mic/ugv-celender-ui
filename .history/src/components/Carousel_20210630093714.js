import React from "react";
import "./Carousel.css";

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <div className="carousel">
          <img
            src="https://ugv.edu.bd/images/campus_images/1582007096.JPG"
            alt="UGV"
            width="200px"
            height="100px"
          />
          <img
            src="https://ugv.edu.bd/images/campus_images/1582007070.jpg"
            alt="UGV"
            width="200px"
            height="100px"
          />
          <img
            src="https://ugv.edu.bd/images/campus_images/1580118676.jpg"
            alt="UGV"
            width="200px"
            height="150px"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
