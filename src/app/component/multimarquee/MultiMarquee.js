import React from "react";
import Marquee from "react-fast-marquee";

function MultiMarquee(props) {
  return (
    <div className="container-fluid bg-warning">
      <div className="d-flex justify-content-between">
        <div>
          <p>
            List Your <br /> Event Faster
          </p>
          <p>for the people, by the People </p>
        </div>
        <div className="marquee-container">
          <Marquee direction="up" gradient={false} speed={40}>
          
           <div className="d-flex flex-column gap-4">
              <div>
                <img
                  className="marquee-images"
                  src="./asserts/images/dj.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="marquee-images"
                  src="./asserts/images/party.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="marquee-images"
                  src="./asserts/images/partygirl.jpg"
                  alt=""
                />
              </div>
            </div>
            </Marquee>
            <Marquee direction="down" gradient={false} speed={40}>

            <div className="d-flex flex-column gap-4 ">
              <div>
                <img
                  className="marquee-images"
                  src="./asserts/images/dj.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="marquee-images"
                  src="./asserts/images/party.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="marquee-images"
                  src="./asserts/images/partygirl.jpg"
                  alt=""
                />
              </div>
            </div>
            </Marquee>
            <Marquee direction="up" gradient={false} speed={40}>

            <div className="d-flex flex-column gap-4">
              <div>
                <img
                  className="marquee-images"
                  src="./asserts/images/dj.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="marquee-images"
                  src="./asserts/images/party.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="marquee-images"
                  src="./asserts/images/partygirl.jpg"
                  alt=""
                />
              </div>
            </div>
            </Marquee>

          
        </div>
      </div>
    </div>
  );
}

export default MultiMarquee;
