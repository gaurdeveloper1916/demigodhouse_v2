import React from "react";
// import "../../app/testing/testing.css";
const EventsCarousel = () => {
  return (
    <>
      <div className="">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade w-100"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner w-100">
            <div class="carousel-item active">
              <div
                style={{
                  backgroundImage: "url(/asserts/images/industry.png)",
                 
                }}
              >
                <div className="col-lg-12 d-flex justify-content- ">
                  <div
                    className="col-5 mt-lg-5 mb-lg-5 p-5 text-black"
                    style={{ marginLeft: "10rem" }}
                  >
                    <p
                      className="m-0"
                      style={{ fontSize: "90px", lineHeight: "80px" }}
                    >
                      Adventure
                    </p>
                    <p
                      className="m-0"
                      style={{ fontSize: "90px", lineHeight: "80px" }}
                    >
                      awaits. Let's
                    </p>
                    <p
                      className="m-0"
                      style={{ fontSize: "90px", lineHeight: "80px" }}
                    >
                      go !
                    </p>
                    <h5 className="mt-4 text-white">Event Name</h5>
                    <h6 className="text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Numquam cumque incidunt necessitatibus iure cum nobis
                      ipsa. Cupiditate commodi modi totam maxime accusantium
                      odio quisquam perferendis numquam, alias, hic reiciendis
                      nemo?
                    </h6>
                    <button className="btn px-5 p-2 bg-white text-primary mt-2 ">
                      GET TICKETS
                    </button>
                  </div>
                  <div
                    className="col-5 d-flex justify-content-center position-absolute"
                    style={{ top: "8.3rem", right: "-7rem" }}
                  >
                    <div className="position-absolute">
                      <div className="d-flex">
                        <div className="col-lg-6 col-3 p-5"></div>
                        <div
                          className="col-lg-6 col-3 text-white p-5 "
                          style={{ backgroundColor: "#fafafa3b" }}
                        >
                          <h5>Event Name</h5>
                          <h6 className="text-decoration-underline mt-3">
                            Book Now
                          </h6>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div
                          className="col-lg-6 col- text-white p-5 "
                          style={{ backgroundColor: "#fafafa3b" }}
                        >
                          <h5>Event Name</h5>
                          <h6 className="text-decoration-underline mt-3">
                            Book Now
                          </h6>
                        </div>
                        <div
                          className="col-lg-6 text-white col-3 p-5"
                          style={{ backgroundColor: "#46454578" }}
                        >
                          <h5>Event Name</h5>
                          <h6 className="text-decoration-underline mt-3">
                            Book Now
                          </h6>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div
                          className="col-lg-6 text-white col-3 p-5"
                          style={{ backgroundColor: "#46454578" }}
                        >
                          <h5>Event Name</h5>
                          <h6 className="text-decoration-underline mt-3">
                            Book Now
                          </h6>
                        </div>
                        <div
                          className="col-lg-6 col-3 text-white p-5 "
                          style={{ backgroundColor: "#fafafa3b" }}
                        >
                          <h5>Event Name</h5>
                          <h6 className="text-decoration-underline mt-3">
                            Book Now
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/images/industry.png" class="img-fluid" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/images/bannerleft.png" class="img-fluid" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      </>
  )}
  export default EventsCarousel