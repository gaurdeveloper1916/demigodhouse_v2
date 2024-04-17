import React from "react";
import Slider from "react-slick";

function CarouselEvents() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  const initialImages = [
    {
      img: "https://img.freepik.com/free-photo/medium-shot-kid-cheating-school-test_23-2150104930.jpg?size=626&ext=jpg",
      name: "Image 1",
      desc: "Description for Image 1",
    },
    {
      img: "https://t3.ftcdn.net/jpg/06/99/52/94/240_F_699529470_u7ZaG6otV8Cnn5WwHFc8YowT9IRXhFr8.jpg",
      name: "Image 2",
      desc: "Description for Image 2",
    },

    {
      img: "https://img.freepik.com/free-photo/foggy-autumn-night_181624-10942.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais",
      name: "Image 4",
      desc: "Description for Image 4",
    },
    {
      img: "https://img.freepik.com/free-photo/dark-sunset_1361-177.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais",
      name: "Image 5",
      desc: "Description for Image 5",
    },
    {
      img: "https://img.freepik.com/free-photo/greyscale-shot-bare-tree-park-covered-with-fog_181624-17189.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=ais",
      name: "Image 6",
      desc: "Description for Image 6",
    },
  ];
  return (
    <div className="slider-container p-3 px-5">
      <Slider {...settings}>
        {initialImages.map((item, i) => {
          return (
            <div className="d-flex p-1">
              <div
                className="w-100 h-100 rounded"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className=" d-flex flex-column  bottom-0 p-3">
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
                  <div className="d-flex justify-content-end">
                  <button style={{ textAlign: "end",borderRadius:'20px',fontSize:'10px' ,border:'none'}} className=" px-3 mt-5">Book Now</button>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CarouselEvents;
