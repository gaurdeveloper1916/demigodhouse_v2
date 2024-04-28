import React from "react";
import "./testtube.css";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

function Testtube(props) {
  const multipleTestTube = [
    "190px",
    "270px",
    "340px",
    "200px",
    "280px",
    "180px",
  ];
  return (
    <div className="container">
      <div className=" p-5">
        <div className="d-flex">
          <div className="col-lg-6">
            <div className="d-flex gap-2  align-items-center">
              {multipleTestTube.map((item) => {
                return <div style={{ height: item }} class="test-tube-1"></div>;
              })}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column  justify-conten-center">
              <h4 className="text-white">Event name</h4>
              <p className="text-white">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots piece of classical Latin literature from 45
                BC, making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words, consectetur, from a Lorem Ipsum
                passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source
              </p>
              <div className="d-flex gap-5 cursor mt-5  justify-content-center align-items-center">
                <IoIosArrowBack size={40} color="gray"/>

                <IoChevronForwardSharp size={40}  color="gray" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testtube;
