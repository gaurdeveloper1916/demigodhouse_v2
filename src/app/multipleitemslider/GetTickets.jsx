import React from "react";

function GetTickets(props) {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center p-5">
          <div className="col-lg-9 p-5">
            <div className="d-flex justify-content-center aligns-item-center">
             <div>
             <h6  style={{fontSize:'30px'}}   className="text-white text-center">
                EXPLORE THE ENCHANTING WORLD OF<br></br> SYLVIRA WITH DIMIRRI VEGAS AND
                LIKE MINE{" "}
              </h6>
             </div>
            </div>
            <div className="d-flex flex-column justify-content-center aligns-item-center mt-5">
             <div>
             <h6  style={{fontSize:'30px'}}   className="text-white text-center">
                THE CHAINSMOKER
              </h6>
              <p style={{fontFamily:'emoji',fontSize:'22px'}} className="text-white text-center"> AFROJACK LOST FREQUENCIES MARLON HOFFSTANDT MAIN<br></br> STEVEAOKI TIMMY TRUMPETAND MANY MORE</p>
             </div>
             <div className="d-flex justify-content-center align-items-center">
             <button className=" bg-dark text-white  px-5 get-tickets" type="button">GET TICKETS</button>

             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetTickets;
