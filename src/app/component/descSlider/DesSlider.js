"use client";
import React from "react";
import Slider from "react-slick";
import "./desslider.css";
function DesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const initialImages = [
 
    {
      img: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg",
      name: "Image 4",
      desc: "Description for Image 4",
    },
    {
      img: "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg",
      name: "Image 5",
      desc: "Description for Image 5",
    },
    {
      img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydHl8ZW58MHx8MHx8fDA%3D",
      name: "Image 6",
      desc: "Description for Image 6",
    },
    {
      img: "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg",
      name: "Image 7",
      desc: "Description for Image 7",
    },
    {
      img: "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg",
      name: "Image 8",
      desc: "Description for Image 8",
    },
  ];

  return (
    <div   style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1562563436-a73bab993173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
       
      }}  className="slider-container p-5 ">
      <Slider {...settings}>
        {initialImages.map((item) => {
          return (
            <div className="d-flex flex-lg-column  justify-content-center p-5">
           <div>
           <h3 className="text-center m-0 evt-name mb-5">EVENT NAME</h3>
                {/* <h1 className="m-0 text-center">.</h1> */}
           </div>
              <div className="image-container position-relative ">
                <img
                  className="img-fluid rounded "
                  src={item.img}
                  alt="Your Image"
                ></img>
              </div>
              <div className="mt-3">
                <h5 className="text-white mt-2 txt-cont ">VENUE | TIME | DATE </h5>
                <p className="text-white">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's{" "}
                </p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default DesSlider;
