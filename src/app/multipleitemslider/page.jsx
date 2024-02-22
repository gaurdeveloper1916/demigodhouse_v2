"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="">
        <h5 className="font-weight-bold" style={{fontFamily:'korolev-condensed'}}>UPCOMING EVENTS</h5>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper main-container"
        >
          <SwiperSlide>
            <div className="d-flex col-lg-12 gap-2">
              
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg"
                ></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex col-lg-12 gap-2">
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://t3.ftcdn.net/jpg/06/99/52/94/240_F_699529470_u7ZaG6otV8Cnn5WwHFc8YowT9IRXhFr8.jpg"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://t3.ftcdn.net/jpg/06/99/52/94/240_F_699529470_u7ZaG6otV8Cnn5WwHFc8YowT9IRXhFr8.jpg"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://t3.ftcdn.net/jpg/06/99/52/94/240_F_699529470_u7ZaG6otV8Cnn5WwHFc8YowT9IRXhFr8.jpg"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://t3.ftcdn.net/jpg/06/99/52/94/240_F_699529470_u7ZaG6otV8Cnn5WwHFc8YowT9IRXhFr8.jpg"
                ></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex col-lg-12 gap-2">
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/dark-sunset_1361-177.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais"
                ></img>
              </div>

              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/dark-sunset_1361-177.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/dark-sunset_1361-177.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/dark-sunset_1361-177.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais"
                ></img>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <h5 className="" style={{fontFamily:'korolev-condensed'}}>FEATURED EVENTS</h5>

        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper main-container"
        >
          <SwiperSlide>
            <div className="d-flex col-lg-12 gap-2">
             
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg"
                ></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex col-lg-12 gap-2">
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://t3.ftcdn.net/jpg/06/99/52/94/240_F_699529470_u7ZaG6otV8Cnn5WwHFc8YowT9IRXhFr8.jpg"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://t3.ftcdn.net/jpg/06/99/52/94/240_F_699529470_u7ZaG6otV8Cnn5WwHFc8YowT9IRXhFr8.jpg"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://t3.ftcdn.net/jpg/06/99/52/94/240_F_699529470_u7ZaG6otV8Cnn5WwHFc8YowT9IRXhFr8.jpg"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://t3.ftcdn.net/jpg/06/99/52/94/240_F_699529470_u7ZaG6otV8Cnn5WwHFc8YowT9IRXhFr8.jpg"
                ></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex col-lg-12 gap-2">
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/dark-sunset_1361-177.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/dark-sunset_1361-177.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/dark-sunset_1361-177.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais"
                ></img>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src="https://img.freepik.com/free-photo/dark-sunset_1361-177.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais"
                ></img>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
