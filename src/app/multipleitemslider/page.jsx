// components/ImageGallery.js
"use client";
import React, { useState, useEffect } from "react";
import EventsCarousel from "../component/EventsCarousel/EventsCarousel";
import Sliderr from "../component/category/Slider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderEvent from "./sliderEvent";
import Flipcards from "../component/FlipCards/Flipcards";
import GetTickets from "./GetTickets";
import CarouselEvents from "./slider";
import '../multipleitemslider/multipleslider.css'
import Test from "../component/Test.js/Test";

const ImageGallery = () => {
  // const [backgroundImage, setBackgroundImage] = useState(
  //   "https://img.freepik.com/free-photo/vibrant-scene-with-dj-techno-party_23-2150551537.jpg?ga=GA1.1.1887626236.1712805731&"
  // );
  const [backgroundImage, setBackgroundImage] = useState('');
  const [currentImage, setCurrentImage] = useState('');
  const [isChanging, setIsChanging] = useState(false);
  const [thumbnails] = useState([
    "https://img.freepik.com/free-photo/vibrant-scene-with-dj-techno-party_23-2150551537.jpg?ga=GA1.1.1887626236.1712805731&",
    "https://img.freepik.com/premium-photo/clubbing-dj-lively-energetic-performance-with-electronic-dance-music_734790-6060.jpg?ga=GA1.1.1887626236.1712805731&",
    "https://img.freepik.com/premium-photo/dynamic-image-dj-console-energizing-party-with-vibrant-beats_99096-4039.jpg?ga=GA1.1.1887626236.1712805731&",
    "https://img.freepik.com/premium-photo/dj-with-headphones-night-club-party-blue-light-people-crowd-background_968517-142771.jpg?ga=GA1.1.1887626236.1712805731&",
  ]);

  useEffect(() => {
    setBackgroundImage(thumbnails[0]);
    setCurrentImage(thumbnails[0]);
  }, [thumbnails]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      const nextIndex = (thumbnails.indexOf(currentImage) + 1) % thumbnails.length;
      setCurrentImage(thumbnails[nextIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, [thumbnails, currentImage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundImage(currentImage);
      setIsChanging(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [currentImage]);
  return (
    <div className="bg-dark">
     <div className="container-event-1">
      <div className="image-container-event">
        <div className="event-details col-lg-6 p-5">
          <h1 className="event-name-h1">Event Name</h1>
          <p>electronic typesetting, remaining it It was popularised in the 1960s was popularised essentially unchanged...</p>
          <button className="book-now-event px-4">Book Now</button>
        </div>
        <img
          src={backgroundImage}
          alt="Background Image"
          className={`background-image-event fading-out `}
        />
        <div className="thumbnails-event p-5 backgroundImageEvent">
          {thumbnails.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail-event img-fluid"
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
    </div>
      <Sliderr />
      <CarouselEvents />
      <GetTickets />
      <Flipcards />
      <Test/>
      <EventsCarousel />
      {/* <div>
   (
    <div className="parent p-5">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((image, index) => (
          <div
            className="slider-cartoon"
            key={index}
            onMouseEnter={() => setHoveredImageIndex(index)}
            onMouseLeave={() => setHoveredImageIndex(null)}
            style={{ position: 'relative' }}
          >
            <img src={index === hoveredImageIndex ? image.hoverUrl : image.url} alt="movie" />
            {index === hoveredImageIndex && (
              <div className="hover-content-cartoon">
                <h2>{image.heading}</h2>
                <p>{image.paragraph}</p>
                <button className="animated-button-cartoon">Button</button>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
   </div> */}
      {/* <SliderEvent/> */}
    </div>
  );
};

export default ImageGallery;
