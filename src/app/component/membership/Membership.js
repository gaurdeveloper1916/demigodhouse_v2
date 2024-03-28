import Image from "next/image";
import React from "react";
import style from "./membership.module.css";
function Membership(props) {
  const accordionData = [
    {
      id: "headingOne",
      title: "Accordion Item #1",
      content:
        "This is the first item's accordion body. It is shown by default...",
    },
    {
      id: "headingTwo",
      title: "Accordion Item #2",
      content:
        "This is the second item's accordion body. It is hidden by default...",
    },
    {
      id: "headingThree",
      title: "Accordion Item #3",
      content:
        "This is the third item's accordion body. It is hidden by default...",
    },
  ];
  return (
    <div className="container">
      <div className="row bg-dark-black">
        <div className="col-lg-6 p-3">
          <h3 className="text-white p-3 membership-title">
            Membership Subscription
          </h3>
          <div className="accordion accodationBorder" id="accordionExample">
            <div class="accordion-item accordation-bg">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class={`accordion-button active accodationBorder accordationheading accordation-bg`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  ₹ 51,0000 for offspring
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-white">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance,
                </div>
              </div>
            </div>
            <div class="accordion-item accordation-bg">
              <h2 className="accordion-header accodationBorder" id="headingTwo">
                <button
                  class="accordion-button collapsed   accodationBorder accordationheading accordation-bg"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  ₹ 1,15,0000 for Female{" "}
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-white">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance,
                </div>
              </div>
            </div>
            <div class="accordion-item accordation-bg">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed  accodationBorder accordationheading accordation-bg"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  ₹ 500000 for Couple{" "}
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-white">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance,
                </div>
              </div>
            </div>
            <div class="accordion-item accordation-bg">
              <h2 class="accordion-header" id="headingfour">
                <button
                  class="accordion-button collapsed  accodationBorder accordationheading accordation-bg"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefour"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  ₹ 500000 for Couple{" "}
                </button>
              </h2>
              <div
                id="collapsefour"
                class="accordion-collapse collapse"
                aria-labelledby="headingfour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-white">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance,
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 p-3 d-flex align-items-center justify-content-center">
          <img
            className="w-100  p-5 img-membership"
            src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Membership;
