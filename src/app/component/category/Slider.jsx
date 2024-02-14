"use client";
import Image from "next/image";
import React, { useState } from "react";

const Sliderr = () => {
  const [active, setActive] = useState(null);

  const handleSlideClick = (index) => {
    setActive(index);
  };
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
  return (

          <div className="min-h-screen ">
            <div className="slider__wrapper">
              <div className="slider__inner py-5">
                {/* {Array.from({ length: 5 }, (_, index) => (
                  <div
                    key={index}
                    className={`slide ${active === index ? "active" : ""}`}
                    onClick={() => handleSlideClick(index)}
                  >
                    <img  className="w-100"
                      src="https://plus.unsplash.com/premium_photo-1707699571929-0675e66a4873?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                      alt=""
                    />
                    <h1>User Name</h1>
                    <div className="desc">
                    </div>
                  </div>
                ))} */}
                {initialImages.map((item,index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className={`slide  ${active === index ? "active" : ""}`}
                        onClick={() => handleSlideClick(index)}
                      >
                        <img
                          className=""
                          src={item.img}
                          alt=""
                        />
                        <h1 className="cat-h1">{item.name}</h1>
                        <div className="desc">{/* <h2>User Name</h2> */}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
       
  );
};

export default Sliderr;
