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
  const obj=[{
    img:'./asserts/images/dubai.png',
    name:"Events in Dubai"
  },{
    img:'./asserts/images/canada.png',
    name:"Events in Canada"
  },{
    img:'./asserts/images/indonesia.png',
    name:"Events in Indonesia"
  }]
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-lg-10">
          <Slider {...settings}>
            {
              obj.map((item,i)=>{
                return <div className="col-6 position-relative">
                <img
                  className="w-100 img-fluid global-event-img"
                  src={item.img}
                  alt=""
                  // Adjust height as needed
                />
                <div className="centered-text">
                  <p className="event-name">{item.name}</p>
                </div>
              </div>
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Globalevents;
