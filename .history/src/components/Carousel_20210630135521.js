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
          />
          <p className="flex">Hello</p>
          <img
            src="https://ugv.edu.bd/images/campus_images/1582007070.jpg"
            alt="UGV"
          />
          <img
            src="https://ugv.edu.bd/images/campus_images/1580118676.jpg"
            alt="UGV"
          />
        </div>
        {/*descriptions of the building*/}
        <div className="names">
          <p className="buildingNames">Buiding 1</p>
          <p className="buildingNames">Buiding 2</p>
          <p className="buildingNames">Buiding 3</p>
        </div>
      </div>
    );
  }
}

export default Carousel;
