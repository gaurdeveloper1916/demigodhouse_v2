import React from "react";

function Domesticevets(props) {
  return (
    <div className="container">
      <div className="d-flex flex-column mt-4">

        <div className="d-flex gap-1 ">
          <b className="text-warning fs-4">Latest</b>
          <b className="fs-4">Domestic Events</b>
        </div>

        <div className="d-flex gap-4 mt-5">  
          <div className=" d-flex  col-lg-6 bg-warning">
            <div className="col-lg-5">system</div>
            <div className="col-lg-7">
                <h3>Event Name</h3>
                <p>lorem is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </p>
            </div>
          </div>
          <div className=" d-flex  col-lg-6 bg-warning">
            <div className="col-lg-5">system</div>
            <div className="col-lg-7">boiler</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Domesticevets;
