import React from "react";

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <div className="carousel">
          <img
            src="https://ugv.edu.bd/images/campus_images/1582007070.jpg"
            alt="UGV"
            width="34px"
          />
          <img
            src="https://ugv.edu.bd/images/campus_images/1580118676.jpg"
            alt="UGV"
            width="34px"
          />
          <img
            src="https://ugv.edu.bd/images/campus_images/1582007096.JPG"
            alt="UGV"
            width="34px"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
