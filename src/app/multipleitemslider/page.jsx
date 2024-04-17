// components/ImageGallery.js
'use client'
import React, { useState, useEffect } from 'react';
import EventsCarousel from '../component/EventsCarousel/EventsCarousel';
import Slider from '../component/slider/Slider';
import Globalevents from '../component/globalevents/Globalevents';
import Explore from '../component/explore/Explore';
import Domesticevets from '../component/domesticevents/Domesticevets';
import Events from '../component/events/Events';
import Booknow from '../component/booknow/Booknow';
import Sliderr from '../component/category/Slider';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderEvent from './sliderEvent';
import Flipcards from '../component/FlipCards/Flipcards';
import GetTickets from './GetTickets';
import CarouselEvents from './slider';

const ImageGallery = () => {
  const [backgroundImage, setBackgroundImage] = useState('https://img.freepik.com/free-photo/vibrant-scene-with-dj-techno-party_23-2150551537.jpg?ga=GA1.1.1887626236.1712805731&');
  const [thumbnails] = useState(['https://img.freepik.com/free-photo/vibrant-scene-with-dj-techno-party_23-2150551537.jpg?ga=GA1.1.1887626236.1712805731&', 'https://img.freepik.com/premium-photo/clubbing-dj-lively-energetic-performance-with-electronic-dance-music_734790-6060.jpg?ga=GA1.1.1887626236.1712805731&', 'https://img.freepik.com/premium-photo/dynamic-image-dj-console-energizing-party-with-vibrant-beats_99096-4039.jpg?ga=GA1.1.1887626236.1712805731&', 'https://img.freepik.com/premium-photo/dj-with-headphones-night-club-party-blue-light-people-crowd-background_968517-142771.jpg?ga=GA1.1.1887626236.1712805731&']);

  // Function to change the background image
  const changeBackground = (imageUrl) => {
    setBackgroundImage(imageUrl);
  };

  // Auto-scrolling thumbnails

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const sliderImageUrl = [
    //First image url
    {
      url:"https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
      hoverUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
      heading: 'Heading 1', paragraph: 'Description for image 1'
    },
    {
      url:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
        hoverUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",

        heading: 'Heading 2', paragraph: 'Description for image 2'
    },
    //Second image url
    {
      url:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
        hoverUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",

        heading: 'Heading 3', paragraph: 'Description for image 3'
    },
    //Third image url
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
        hoverUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",

        heading: 'Heading 4', paragraph: 'Description for image 4'
    },
  
    //Fourth image url
  
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
        hoverUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
        heading: 'Heading 4', paragraph: 'Description for image 4'


    }
  ];
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  return (
  <div className='bg-dark'>
      <div className="container-event-1  ">
     
      <div className="image-container-event">
      <div className="event-details col-lg-6 p-5">
        <h1 className='event-name-h1'>Event Name </h1>
        <p>electronic typesetting, remaining it  It was popularised in the 1960s was popularised essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        </p>
        <button className='book-now-event px-4'>Book Now</button>
      </div>
        <img src={backgroundImage} alt="Background Image" className="background-image-event" />
        <div className="thumbnails-event p-5">
          
          {thumbnails.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail-event"
              onClick={() => changeBackground(image)}
            />
          ))}
        </div>
      </div>

  
    </div>
   <Sliderr/>
   <CarouselEvents/>
   <GetTickets/>
   <Flipcards/>
   <EventsCarousel/>
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
