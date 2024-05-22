import React from "react";
import "./index.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForwardSharp } from "react-icons/io5";
function Particular(props) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="w-100 position-relative"
          style={{
            backgroundImage: `url(https://culturehaze.com/wp-content/uploads/2023/07/Diljit-Dosanjh-Born-To-Shine-Tour-.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh', // Adjust height as needed
          }}
        >
          <div
            className="position-absolute w-100 text-center"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <h1 className="text-white" style={{
                fontSize: '11vw',
                fontFamily:'math',
                textShadow: `
                  1px 1px 0 #000,
                  2px 2px 0 #000,
                  3px 3px 0 #000,
                  4px 4px 0 #000,
                  5px 5px 0 #000,
                  6px 6px 0 #000,
                  7px 7px 0 #000,
                  8px 8px 0 #000,
                  9px 9px 0 #000,
                  10px 10px 0 #000
                `,
              }}>
              EVENT NAME
            </h1>
          </div>
          <div className="d-flex justify-content-between lastdiv position-absolute w-100 p-3" style={{ bottom: 0 }}>
            <div className="col-lg-4 d-flex flex-column">
              <p className="text-white col-lg-4 m-0 buton-txt rounded">EVENT NAME</p>
              <p className="text-white des mt-2">
                Last year, the “G.O.A.T.” performed some of his most influential Punjabi records across the U.S. and
                Canada including Calgary, Toronto, Los Angeles, Houston, Dallas, and Mumbai.
              </p>
            </div>
            <div className="d-flex flex-column px-3">
              <p className="text-white m-0 buton-txt rounded px-3">BOOK NOW</p>
              <div className="d-flex gap-5 cursor align-items-center justify-content-center mt-2">
                <IoIosArrowBack size={16} className="bg-white rounded-pill" color="black" />
                <IoChevronForwardSharp size={16} className="bg-white rounded-pill" color="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Particular;
