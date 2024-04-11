import React from "react";
import "../FlipCards/flipcard.css";

const Flipcards = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3">
          <div class="wrapper" ontouchstart="this.classList.toggle('hover');">
            <div class="flipper">
              <div
                style={{
                  backgroundImage: `url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg)`,
                }}
                class="card-front rounded"
              >
                <div className=" d-flex flex-column">
                  <p
                    style={{ textAlign: "start" }}
                    className="text-white m-0 p-0"
                  >
                    Event Name
                  </p>
                  <p
                    style={{ textAlign: "start", fontSize: "12px" }}
                    className="text-white"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur explicabo deleniti repellendus{" "}
                  </p>
                </div>
              </div>
              <div class="card-back p-4 mt-2">
                <img
                  className="w-100 rounded"
                  src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                ></img>
                <h5 style={{ textAlign: "start" }}>Event Name</h5>
                <p style={{ textAlign: "start", fontSize: "10px" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  reprehenderit iste soluta distinctio voluptates inventore
                  eligendi,{" "}
                </p>
                <button style={{ textAlign: "end" }} className="rounded">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="wrapper" ontouchstart="this.classList.toggle('hover');">
          <div class="flipper">
              <div
                style={{
                  backgroundImage: `url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg)`,
                }}
                class="card-front rounded"
              >
                <div className=" d-flex flex-column">
                  <p
                    style={{ textAlign: "start" }}
                    className="text-white m-0 p-0"
                  >
                    Event Name
                  </p>
                  <p
                    style={{ textAlign: "start", fontSize: "12px" }}
                    className="text-white"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur explicabo deleniti repellendus{" "}
                  </p>
                </div>
              </div>
              <div class="card-back p-4 mt-2">
                <img
                  className="w-100 rounded"
                  src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                ></img>
                <h5 style={{ textAlign: "start" }}>Event Name</h5>
                <p style={{ textAlign: "start", fontSize: "10px" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  reprehenderit iste soluta distinctio voluptates inventore
                  eligendi,{" "}
                </p>
                <button style={{ textAlign: "end" }} className="rounded">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="wrapper" ontouchstart="this.classList.toggle('hover');">
          <div class="flipper">
              <div
                style={{
                  backgroundImage: `url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg)`,
                }}
                class="card-front rounded"
              >
                <div className=" d-flex flex-column">
                  <p
                    style={{ textAlign: "start" }}
                    className="text-white m-0 p-0"
                  >
                    Event Name
                  </p>
                  <p
                    style={{ textAlign: "start", fontSize: "12px" }}
                    className="text-white"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur explicabo deleniti repellendus{" "}
                  </p>
                </div>
              </div>
              <div class="card-back p-4 mt-2">
                <img
                  className="w-100 rounded"
                  src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                ></img>
                <h5 style={{ textAlign: "start" }}>Event Name</h5>
                <p style={{ textAlign: "start", fontSize: "10px" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  reprehenderit iste soluta distinctio voluptates inventore
                  eligendi,{" "}
                </p>
                <button style={{ textAlign: "end" }} className="rounded">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="wrapper" ontouchstart="this.classList.toggle('hover');">
          <div class="flipper">
              <div
                style={{
                  backgroundImage: `url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg)`,
                }}
                class="card-front rounded"
              >
                <div className=" d-flex flex-column">
                  <p
                    style={{ textAlign: "start" }}
                    className="text-white m-0 p-0"
                  >
                    Event Name
                  </p>
                  <p
                    style={{ textAlign: "start", fontSize: "12px" }}
                    className="text-white"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur explicabo deleniti repellendus{" "}
                  </p>
                </div>
              </div>
              <div class="card-back p-4 mt-2">
                <img
                  className="w-100 rounded"
                  src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                ></img>
                <h5 style={{ textAlign: "start" }}>Event Name</h5>
                <p style={{ textAlign: "start", fontSize: "10px" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  reprehenderit iste soluta distinctio voluptates inventore
                  eligendi,{" "}
                </p>
                <button style={{ textAlign: "end" }} className="rounded">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcards;
