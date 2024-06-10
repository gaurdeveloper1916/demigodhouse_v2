"use client";
import React, { useState } from "react";
import "./testtube.css";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiStarShuriken } from "react-icons/gi";

function Testtube() {
  const multipleTestTube = [
 
    460,
    350,
    460,
    350,

  ];
  const tubeData = [
    {
      evtName: "Dubai Events",
      evtDes:
        "Virginia, looked up on of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Lati professor at Hampden-Sydney College in ",
    },
    {
      evtName: "Singapur Events",
      evtDes:
        "It has roots piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Lati professor at Hampden-Sydney College in Virginia, looked up on of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      evtName: "Malashiya Events",
      evtDes:
        "Contrary to popular belief, Lorem Ipsum is not simply rand text. It has roots piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable",
    },
  ];
  const [intialState, setIntialState] = useState(tubeData[0]);

  return (
    <div className="container mt-5">
      {/* <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg)",
        }}
        className="container-fluid p-4"
      >
        <div className="  d-flex justify-content-center align-items-center">
          <div className="col-lg-10  d-flex flex-lg-row flex-column  align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="d-flex gap-2  align-items-center">
                {multipleTestTube.map((item) => {
                  return (
                    <div style={{ position: "relative", height: item }}>
                      <video autoPlay loop muted className="tube-bg-video">
                        <source
                          src="./asserts/images/disco.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>

                      <div className="test-tube-1"></div>
                    </div>
                  );
                })}
                l
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-flex flex-column  justify-conten-center">
                <h2 className="text-white evnt-txt-heading">{intialState.evtName}</h2>
                <p className="text-white evnt-txt-des fw-bold">
                 {intialState.evtDes}
                </p>
                <div className="d-flex gap-5 cursor mt-5  justify-content-center align-items-center">
                  <IoIosArrowBack
                  onClick={()=>{setIntialState(tubeData[1])}}
                    size={40}
                    className="arrow bg-white"
                    color="black"
                  />

                  <IoChevronForwardSharp
                   onClick={()=>{setIntialState(tubeData[2])}}
                    size={40}
                    className="arrow bg-white"
                    color="black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <div className=" d-flex gap-2 m-0 justify-content-center align-items-center ">
         <div className=" d-flex col-lg-8 gap-3">
         <h1 className="text-white fw-bold">EVENT</h1>
          <p className="text-white  m-0 w-100 mt-2 event-name">
            {" "}
            <hr  className=""/>
            <p>(THE STORY)</p>

          </p>{" "} 
         </div>
       
        </div>
        <div className=" d-flex gap- justify-content-center align-items-center ">
         <div className=" d-flex col-lg-7 gap-3">
         <h1  className="text-warning fw-bold">NAME</h1>
      
         </div>
       
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
      <div className="col-lg-10  d-flex flex-lg-row flex-column   justify-content-center">

        <div className="col-lg-4">
              <div className="d-flex gap-2 justify-content-center align-items-center">
                {multipleTestTube.map((item) => {
                  return (
                    <div style={{ position: "relative", height: `${item-150}px` }}>
                      <video autoPlay loop muted className="tube-bg-video">
                        <source
                          src="./asserts/images/testing.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>

                      <div className="test-tube-1"></div>
                    </div>
                  );
                })}
                l
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-column  ">
                {/* <h2 className="text-white evnt-txt-heading">{intialState.evtName}</h2> */}
                <p className="text-white evnt-txt-des ">
                 {intialState.evtDes}
                </p>
               <div className="d-flex gap-1 justify-content-center align-items-center">
               <div className="col-lg-8 d-flex py-5">
               <button className="know-more-button px-4 py-1 fw-bold">Know More <GiStarShuriken />
</button>
               <button className="know-more-arrow"><IoIosArrowRoundForward />
</button>
               </div>
               </div>
                
                {/* <div className="d-flex gap-5 cursor mt-5  justify-content-center align-items-center">
                  <IoIosArrowBack
                  onClick={()=>{setIntialState(tubeData[1])}}
                    size={40}
                    className="arrow bg-white"
                    color="black"
                  />

                  <IoChevronForwardSharp
                   onClick={()=>{setIntialState(tubeData[2])}}
                    size={40}
                    className="arrow bg-white"
                    color="black"
                  />
                </div> */}
              </div>
            </div>
</div>
      </div>
      
            
    </div>
  );
}

export default Testtube;
