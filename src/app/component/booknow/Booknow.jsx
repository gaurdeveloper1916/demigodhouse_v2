"use client";
import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
const Booknow = () => {
  const [currentSlide, setCurrentSlide] = useState("standup");
  return (
    <>
      <div
        className="book_now_user d-flex flex-lg-row flex-column"
        style={{
          display: "flex",
          background: `url(${
            currentSlide === "standup"
              ? "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              : currentSlide === "djnight"
              ? "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }) center center / cover no-repeat `,
        }}
      >
        <div
          className={`slider ${currentSlide === "standup" ? "active" : ""}`}
          onClick={(e) => setCurrentSlide("standup")}
        >
          {/* <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="full_img"
          /> */}
          <div className="booknow__title_wrapper">
            <FaPlus className="plus_icon" />
            <p
              className={`book_title ${
                currentSlide === "standup" ? "active" : ""
              }`}
            >
              standup
            </p>
          </div>

          <div
            className={`book_now_user_content ${
              currentSlide === "standup" ? "active" : ""
            }`}
          >
            <p className="text-uppercase">standup</p>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              tempore
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              perferendis perspiciatis in suscipit nobis, quasi tenetur nesciunt
              vitae totam iure.
            </p>
            <button className="btn">Book Now</button>
          </div>
        </div>

        <div
          className={`slider ${currentSlide === "djnight" ? "active" : ""}`}
          onClick={(e) => setCurrentSlide("djnight")}
        >
          {/* <img
            src="https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="full_img"
          /> */}
          <div className="booknow__title_wrapper">
            <FaPlus className="plus_icon" />
            <p
              className={`book_title text-uppercase ${
                currentSlide === "djnight" ? "active" : ""
              }`}
            >
              Dj night
            </p>
          </div>

          <div
            className={`book_now_user_content ${
              currentSlide === "djnight" ? "active" : ""
            }`}
          >
            <p className="text-uppercase">Dj night</p>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              tempore
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              perferendis perspiciatis in suscipit nobis, quasi tenetur nesciunt
              vitae totam iure.
            </p>
            <button className="btn ">Book Now</button>
          </div>
        </div>

        <div
          className={`slider ${
            currentSlide === "dandiyanight" ? "active" : ""
          }`}
          onClick={(e) => setCurrentSlide("dandiyanight")}
        >
          {/* <img
            src="https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="full_img"
          /> */}
          <div className="booknow__title_wrapper">
            <FaPlus className="plus_icon" />
            <p
              className={`book_title text-uppercase ${
                currentSlide === "dandiyanight" ? "active" : ""
              }`}
            >
              dandiya night
            </p>
          </div>

          <div
            className={`book_now_user_content ${
              currentSlide === "dandiyanight" ? "active" : ""
            }`}
          >
            <p className="text-uppercase">dandiya night</p>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              tempore
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              perferendis perspiciatis in suscipit nobis, quasi tenetur nesciunt
              vitae totam iure.
            </p>
            <button className="btn ">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booknow;
