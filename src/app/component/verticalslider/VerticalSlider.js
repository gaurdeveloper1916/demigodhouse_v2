"use client";
import React, { useState } from "react";
import "./index.css";
import { MdArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

function VerticalSlider(props) {
  const [img, setImg] = useState(
    "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?cs=srgb&dl=pexels-cottonbro-3171837.jpg&fm=jpg"
  );
  console.log(img)
  const initialImages = [
    {
      img: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?cs=srgb&dl=pexels-cottonbro-3171837.jpg&fm=jpg",
      name: "Image 1",
      desc: "Description for Image 1",
    },
    {
      img: "https://t4.ftcdn.net/jpg/01/20/28/25/360_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg",
      name: "Image 2",
      desc: "Description for Image 2",
    },

    {
      img: "https://www.shutterstock.com/image-photo/young-people-dancing-night-club-260nw-351380480.jpg",
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
  ];
  return (
    <div className="container-fluid ">
      <div className="row bg p-5">
        <div className="col-lg-6 d-flex justify-content-center mt-5">
          <div className="col-lg-10 d-flex justify-content-center allign-items-center  ">
            <div className="d-flex flex-column ">
              <p className="h1 ff-heading evt-name-txt m-0">EVENT</p>
              <p className="h1 ff-heading name-txt m-0">NAME</p>
              <p className="des">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries
              </p>
              <button className="book-now-btn col-lg-4 fw-bold"> Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex mt-5">
          <div className="col-lg-10 gap-4 d-flex justify-content-center allign-items-center  ">
            <div>
              <img
                className="img-fluid rounded main-img"
                src={img}
                alt="Your Image"
              ></img>
            </div>
          </div>
          <div className="col-lg-1 d-flex flex-column justify-content-center allign-items-center gap-2">
            <FaAngleUp className="icon-arrow cursor" size={15} color="white" />
            {initialImages.map((item) => {
              return (
                <>
                  <img
                    onClick={() => {
                      setImg(item.img);
                    }}
                    src={item.img}
                    className="img-fluid  short-img"
                  ></img>
                </>
              );
            })}

            <FaAngleDown
              className="icon-arrow cursor"
              size={15}
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalSlider;
