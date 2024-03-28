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
    <div>
      <img
        className="w-100 img-fluid global-event-img"
        src="https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg"
        alt=""
        style={{ maxHeight: "500px", height: "auto" }} // Adjust height as needed
      />
    </div>
    <div>
      <img
        className="w-100 img-fluid global-event-img"
        src="https://t3.ftcdn.net/jpg/06/99/52/94/240_F_699529470_u7ZaG6otV8Cnn5WwHFc8YowT9IRXhFr8.jpg"
        alt=""
        style={{ maxHeight: "500px", height: "auto" }} // Adjust height as needed
      />
    </div>
    <div>
      <img
        className="w-100 img-fluid global-event-img"
        src="https://img.freepik.com/free-photo/horror-scene-with-eerie-classroom_23-2150975108.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=sph"
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
