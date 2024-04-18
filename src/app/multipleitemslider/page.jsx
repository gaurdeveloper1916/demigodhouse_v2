// components/ImageGallery.js
"use client";
import React, { useState, useEffect } from "react";
import EventsCarousel from "../component/EventsCarousel/EventsCarousel";
import Slider from "../component/slider/Slider";
import Globalevents from "../component/globalevents/Globalevents";
import Explore from "../component/explore/Explore";
import Domesticevets from "../component/domesticevents/Domesticevets";
import Events from "../component/events/Events";
import Booknow from "../component/booknow/Booknow";
import Sliderr from "../component/category/Slider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderEvent from "./sliderEvent";
import Flipcards from "../component/FlipCards/Flipcards";
import GetTickets from "./GetTickets";
import CarouselEvents from "./slider";
import '../multipleitemslider/multipleslider.css'

const ImageGallery = () => {
  // const [backgroundImage, setBackgroundImage] = useState(
  //   "https://img.freepik.com/free-photo/vibrant-scene-with-dj-techno-party_23-2150551537.jpg?ga=GA1.1.1887626236.1712805731&"
  // );
  const [backgroundImage, setBackgroundImage] = useState('https://img.freepik.com/free-photo/vibrant-scene-with-dj-techno-party_23-2150551537.jpg?ga=GA1.1.1887626236.1712805731&');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnails] = useState([
      "https://img.freepik.com/free-photo/vibrant-scene-with-dj-techno-party_23-2150551537.jpg?ga=GA1.1.1887626236.1712805731&",
      "https://img.freepik.com/premium-photo/clubbing-dj-lively-energetic-performance-with-electronic-dance-music_734790-6060.jpg?ga=GA1.1.1887626236.1712805731&",
      "https://img.freepik.com/premium-photo/dynamic-image-dj-console-energizing-party-with-vibrant-beats_99096-4039.jpg?ga=GA1.1.1887626236.1712805731&",
      "https://img.freepik.com/premium-photo/dj-with-headphones-night-club-party-blue-light-people-crowd-background_968517-142771.jpg?ga=GA1.1.1887626236.1712805731&",
  ]);

  useEffect(() => {
      // Set initial background image
      setBackgroundImage(thumbnails[currentIndex]);

      // Change the background image every 5 seconds
      const interval = setInterval(() => {
          setCurrentIndex(current => (current + 1) % thumbnails.length);
      }, 1000);
      // Cleanup interval on component unmount
      return () => clearInterval(interval);
  }, [thumbnails, currentIndex]);

  // Update backgroundImage when currentIndex changes
  useEffect(() => {
      setBackgroundImage(thumbnails[currentIndex]);
  }, [currentIndex, thumbnails]);
  const images = [
    'https://picsum.photos/id/237/200/200',
    'https://picsum.photos/id/238/200/200',
    'https://picsum.photos/id/239/200/200',
    'https://picsum.photos/id/240/200/200',
    'https://picsum.photos/id/241/200/200'
  ];
  const changeBackground = (imageUrl) => {
      setBackgroundImage(imageUrl);
  };
  return (
    <div className="bg-dark">
      <div className="container-event-1  ">
        <div className="image-container-event">
          <div className="event-details col-lg-6 p-5">
            <h1 className="event-name-h1">Event Name </h1>
            <p>
              electronic typesetting, remaining it It was popularised in the
              1960s was popularised essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus
            </p>
            <button className="book-now-event px-4">Book Now</button>
          </div>
          <img
            src={backgroundImage}
            alt="Background Image"
            className="background-image-event"
          />
          <div className="thumbnails-event p-5 backgroundImageEvent">
            {thumbnails.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail-event img-fluid "
                // onClick={() => changeBackground(image)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="image-container">
      {images.map((src, index) => (
        <div key={index} className="image d-flex">
          <img src={src} alt={`Image ${index + 1}`} width={200} height={200} />
        </div>
      ))}
      {/* <style jsx>{`
        .image {
          margin: 10px;
          transition: transform 0.2s ease-in-out;
        }
        .image:hover {
          transform: scale(1.2);
        }
      `}</style> */}
    </div>
      <Sliderr />
      <CarouselEvents />
      <GetTickets />
      <Flipcards />
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
