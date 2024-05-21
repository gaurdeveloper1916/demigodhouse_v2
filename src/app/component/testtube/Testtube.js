import React from "react";
import "./testtube.css";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

function Testtube(props) {
  const multipleTestTube = [
    "200px",
    "500px",
    "400px",
    "460px",
    "590px",
    "390px",
  ];
  return (
  <div className="container mt-5"> 
      <div style={{backgroundImage: "url(https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg)"}} className="container-fluid p-5">
      <div  className="p-lg-5 p-2">
        <div  className="d-flex flex-lg-row flex-column  align-items-center justify-content-center">
          {/* <div className="col-lg-6">
            <div className="d-flex gap-2  align-items-center">
              {multipleTestTube.map((item) => {
                return <div style={{ height: item }} cla ss="test-tube-1"></div>;
              })}
            </div>
          </div> */}
          <div className="col-lg-6">
            <div className="d-flex gap-2  align-items-center">
              {multipleTestTube.map((item) => {
                return (
                  <div style={{ position: "relative", height: item }}>
                    <video autoPlay loop muted className="tube-bg-video">
                      <source
                        src="./asserts/images/video2.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>

                    <div className="test-tube-1"></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex flex-column  justify-conten-center">
              <h2 className="text-white">Event Name</h2>
              <p className="text-white fw-bold">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots piece of classical Latin literature from 45
                BC, making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words, consectetur, from a Lorem Ipsum
                passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source
              </p>
              <div className="d-flex gap-5 cursor mt-5  justify-content-center align-items-center">
                <IoIosArrowBack size={40} className="arrow" />

                <IoChevronForwardSharp size={40} className="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Testtube;
