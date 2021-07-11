import React from "react";

const links = "https://ugv.edu.bd/images/message_images/1582729969.jpg";
class Carousel extends React.Component {
  render() {
    return (
      <div>
        <div className="carousel">
          <img src={links} alt="UGV">
            <a href=""></a>
          </img>
        </div>
      </div>
    );
  }
}

export default Carousel;
