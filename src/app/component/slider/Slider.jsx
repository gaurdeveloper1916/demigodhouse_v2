"use client";
import React, { useEffect, useState } from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

// Data
const initialImages = [
  {
    img: "https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg",
    name: "Image 1",
    desc: "Description for Image 1",
  },
  {
    img: "https://t3.ftcdn.net/jpg/06/99/52/94/240_F_699529470_u7ZaG6otV8Cnn5WwHFc8YowT9IRXhFr8.jpg",
    name: "Image 2",
    desc: "Description for Image 2",
  },
  {
    img: "https://img.freepik.com/free-photo/horror-scene-with-eerie-classroom_23-2150975108.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=sph",
    name: "Image 3",
    desc: "Description for Image 3",
  },
  {
    img: "https://img.freepik.com/free-photo/foggy-autumn-night_181624-10942.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais",
    name: "Image 4",
    desc: "Description for Image 4",
  },
  {
    img: "https://img.freepik.com/free-photo/dark-sunset_1361-177.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais",
    name: "Image 5",
    desc: "Description for Image 5",
  },
  {
    img: "https://img.freepik.com/free-photo/greyscale-shot-bare-tree-park-covered-with-fog_181624-17189.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais",
    name: "Image 6",
    desc: "Description for Image 6",
  },
];
// Carousel
const Slider = () => {
  const [images, setImages] = useState(initialImages);

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images[currentIndex]);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       moveItems();
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, [currentIndex]);

  const moveItems = () => {
    // Get the next index
    const nextIndex = (currentIndex + 1) % images.length;

    // Update the state with the new current index
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  // Function to create a circular index based on the current index and array length
  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  return (
    <>
      <div className="container-fluid p-0">
      {/* <div className="col-lg-12 d-flex justify-content-between">
            <div>
            <img
              style={{ width: "190px", height: "94px" }}
              src="./asserts/images/demigodnew.png"
            ></img>
            </div>
            <div className="d-flex gap-3">
                    <p>Adult</p>
                    <p>Kids</p>
                    <p>Trends</p>
                    <p>My list</p>

            </div>
            <div>
            <MDBCol md="6">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </MDBFormInline>
    </MDBCol>
            </div>
            </div> */}
        <div
         style={{
            backgroundImage: `url(${images[currentIndex].img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            padding:'8rem'
          }}
        className="d-flex justify-space-between flex-lg-row flex-column">
           
          <div className="col-lg-5 p-3 ">
          <img
              style={{ width: "190px", height: "94px" }}
              src="./asserts/images/demigodnew.png"
            ></img>
            <p className="text-white">2023 | 1hour 40 Minutes | Horror</p>
            <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita harum reprehenderit
                 facilis unde voluptatem quaerat nihil magnam. 
                Nemo eos labore, error autem at quam ad, impedit exercitationem aut nostrum enim?</p>
                <div className="d-flex gap-3">
                    <button className="text-white bg-warning" type="button ">Watch</button>
                    <button className="text-white bg-black" type="button ">My List</button>
                </div>
          </div>
          <div className="col-lg-7">
            <div
             
              className="carousel-container "
            >
              <div className="d-flex flex-column">
                <div className="carousel-items">
                  {/* Render 5 items on the screen */}
                  {Array(5)
                    .fill()
                    .map((_, index) => {
                      const imageItem =
                        images[
                          getCircularIndex(
                            currentIndex + index - 2,
                            images.length
                          )
                        ];
                      return (
                        <div
                          key={index}
                          className={`${index === 2 ? "center" : "opacity"} ${
                            (index === 0 || index === 4) &&
                            "end d-none d-md-block d-lg-block"
                          }
                        ${
                          (index === 1 || index === 3) &&
                          "d-none d-md-block d-lg-block"
                        }`}
                          onClick={() =>
                            handleItemClick(
                              getCircularIndex(
                                currentIndex + index - 2,
                                images.length
                              )
                            )
                          }
                        >
                          <img src={imageItem.img} alt="item" />
                        </div>
                      );
                    })}
                </div>
                {/* <div>
                  <div className="description">
                    <p>
                      <b>{images[currentIndex].name}</b>
                    </p>
                    <p>{images[currentIndex].desc}</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
