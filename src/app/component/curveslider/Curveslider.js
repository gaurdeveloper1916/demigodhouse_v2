// components/SwiperSlider.js
"use client";
import { useEffect, useRef } from "react";
import Head from "next/head";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const Curveslider = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current = new Swiper(".swiper", {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // return () => {
    //   if (swiperRef.current) {
    //     swiperRef.current.destroy(true, true);
    //   }
    // };
  }, []);

  return (
    <>
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
      </Head> */}
      {swiperRef === null ? (
        <p>Loading....</p>
      ) : (
        <div className="swiper mt-lg-4 mt-3 mb-lg-5 mb-2">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1451&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1444065707204-12decac917e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Curveslider;
