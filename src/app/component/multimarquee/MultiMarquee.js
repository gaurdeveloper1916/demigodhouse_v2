import React from "react";
import Marquee from "react-fast-marquee";
function MultiMarquee(props) {
  return (
    <div class="container-fluid bg-warning">
    <div class="d-flex justify-content-between align-items-center">
        <div class="col-lg-5 ">
            <p>List Your <br /> Event Faster</p>
            <p>for the people, by the People</p>
        </div>
        <div class="col-lg-7  d-flex justify-content-center ">
            <div class="marquee-container d-flex gap-4 ">
                <Marquee direction="up" gradient={false}  speed={40} class="marquee overflow-hidden">
                    <div class="d-flex flex-column gap-4">
                        <div class="col-3"><img class="marquee-images" src="./asserts/images/dj.jpg" alt="" /></div>
                        <div class="col-3"><img class="marquee-images" src ="./asserts/images/party.jpg" alt="" /></div>
                        <div className="col-3"><img class="marquee-images" src="./asserts/images/partygirl.jpg" alt="" /></div>
                    </div>
                </Marquee>
                <Marquee direction="up" gradient={false} speed={40} class="marquee">
                    <div class="d-flex flex-column gap-4">
                        <div><img class="marquee-images" src="./asserts/images/dj.jpg" alt="" /></div>
                        <div><img class="marquee-images" src="./asserts/images/party.jpg" alt="" /></div>
                        <div><img class="marquee-images" src="./asserts/images/partygirl.jpg" alt="" /></div>
                    </div>
                </Marquee>
                <Marquee direction="up" gradient={false} speed={40} class="marquee ">
                    <div class="d-flex flex-column gap-4">
                        <div><img class="marquee-images" src="./asserts/images/dj.jpg" alt="" /></div>
                        <div><img class="marquee-images" src="./asserts/images/party.jpg" alt="" /></div>
                        <div><img class="marquee-images" src="./asserts/images/partygirl.jpg" alt="" /></div>
                    </div>
                </Marquee>
            </div>
            <div>
            </div>
        </div>
    </div>
</div>
  );
}
export default MultiMarquee;