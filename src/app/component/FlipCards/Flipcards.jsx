import React from "react";
import "../FlipCards/flipcard.css";

const Flipcards = () => {
  const sliderImageUrl = [
    //First image url
    {
      url:"https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
      hoverUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
      heading: 'Heading 1', paragraph: 'Description for image 1'
    },
    {
      url:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
        hoverUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",

        heading: 'Heading 2', paragraph: 'Description for image 2'
    },
    //Second image url
    {
      url:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
        hoverUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",

        heading: 'Heading 3', paragraph: 'Description for image 3'
    },
    //Third image url
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
        hoverUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",

        heading: 'Heading 4', paragraph: 'Description for image 4'
    },
  
    // //Fourth image url
  
    // {
    //   url:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
    //     hoverUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
    //     heading: 'Heading 4', paragraph: 'Description for image 4'


    // }
  ];  return (
    <div className="container-fluid">
      <div className="d-flex gap-2"  >
       {
        sliderImageUrl.map((item)=>{
          return(
            <div class="wrapper w-100" ontouchstart="this.classList.toggle('hover');">
            <div class="flipper ">
              <div
                style={{
                  backgroundImage: `url(${item.url})`,
                }}
                class="card-front rounded"
              >
                <div className=" d-flex flex-column position-absolute bottom-0 p-1">
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
              <div class="card-back  w-100  rounded ">
                <div className="d-flex flex-column">

                </div>
                <img
                  className="w-100 rounded"
                  src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                ></img>
               <div className="p-3">
                <h5 style={{ textAlign: "start" }}>Event Name</h5>
                <p style={{ textAlign: "start", fontSize: "12px" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  reprehenderit iste soluta distinctio voluptates inventore
                  eligendi, {" "}
                </p>
                <div className="d-flex justify-content-end">
                <button style={{ textAlign: "end",borderRadius:'20px',fontSize:'10px' }} className=" px-3">Book Now</button>

                </div>
                
                </div>
              </div>
            </div>
          </div>
          )
        })
       }
     
          
        
      </div>
    </div>
  );
};

export default Flipcards;
