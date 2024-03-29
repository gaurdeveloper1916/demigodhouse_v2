"use client";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Globalevents() {
  const [index, setIndex] = useState(0);
  const img =
    "https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg";
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
<div className="container">
  <div className="d-flex justify-content-center align-items-center">
  <div className="col-lg-10">
  <Slider {...settings}>
    <div className="col-6">
      <img
        className="w-100 img-fluid global-event-img"
        src="./asserts/images/canada.png"
        alt=""
        style={{ maxHeight: "500px", height: "auto" }} // Adjust height as needed
      />
    </div>
    <div className="col-6">
      <img
        className="w-100 img-fluid global-event-img"
        src="./asserts/images/dubai.png"
        alt=""
        style={{ maxHeight: "500px", height: "auto" }} // Adjust height as needed
      />
    </div>
    <div className="col-6">
      <img
        className="w-100 img-fluid global-event-img"
        src="./asserts/images/indonesia.png"
        alt=""
        style={{ maxHeight: "500px", height: "auto" }} // Adjust height as needed
      />
    </div>
  </Slider>
</div>

  </div>
</div>

  );
}

export default Globalevents;
