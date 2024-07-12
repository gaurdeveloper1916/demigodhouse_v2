"use client";
import React, { useEffect, useState } from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import { MdArrowDropUp } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { GiTelepathy } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import Subnavbar from "../navbar/Subnavbar";

// Data
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
    img: "https://img.freepik.com/free-photo/horror-scene-with-eerie-classroom_23-2150975108.jpg?size=626&ext=jpg&uid=R137210381&ga=GA1.1.2086156045.1707366156&semt=sph",
    name: "Image 3",
    desc: "Description for Image 3",
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

// Carousel
const Slider = () => {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        moveItems();
      }, 6000);

      return () => clearInterval(interval);
    }, [currentIndex]);
    const [isSticky, setIsSticky] = useState(false);
    console.log(isSticky)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      });
    }, []);
  const moveItems = () => {
    // Get the next index
    const nextIndex = (currentIndex + 1) % images.length;

    // Update the state with the new current index
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  // Function to create a circular index based on the current index and array length
  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };
  const data = [
    {
      "id": 1,
      "attributes": {
        "URLText": "Event",
        "url": "#",
        "createdAt": "2024-06-04T09:37:28.020Z",
        "updatedAt": "2024-06-04T09:37:29.014Z",
        "publishedAt": "2024-06-04T09:37:29.011Z",
        "url_collections": {
          "data": [
            {
              "id": 1,
              "attributes": {
                "URLText": "All Services",
                "url": "#",
                "createdAt": "2024-06-04T09:35:27.861Z",
                "updatedAt": "2024-06-04T09:35:28.855Z",
                "publishedAt": "2024-06-04T09:35:28.852Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 2,
              "attributes": {
                "URLText": "Career Counseling",
                "url": "#",
                "createdAt": "2024-06-04T09:36:08.206Z",
                "updatedAt": "2024-06-04T09:36:09.354Z",
                "publishedAt": "2024-06-04T09:36:09.350Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 3,
              "attributes": {
                "URLText": "Study Abroad",
                "url": "#",
                "createdAt": "2024-06-04T09:36:29.997Z",
                "updatedAt": "2024-06-04T09:36:31.080Z",
                "publishedAt": "2024-06-04T09:36:31.078Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 4,
              "attributes": {
                "URLText": "Test Preparation",
                "url": "#",
                "createdAt": "2024-06-04T09:36:52.535Z",
                "updatedAt": "2024-06-04T09:36:53.560Z",
                "publishedAt": "2024-06-04T09:36:53.557Z",
                "urlicon": {
                  "data": null
                }
              }
            }
          ]
        },
        "urlicon": {
          "data": null
        }
      }
    },
    {
      "id": 2,
      "attributes": {
        "URLText": "Corporate",
        "url": "#",
        "createdAt": "2024-06-04T09:40:16.115Z",
        "updatedAt": "2024-06-04T09:40:17.431Z",
        "publishedAt": "2024-06-04T09:40:17.428Z",
        "url_collections": {
          "data": [
            {
              "id": 5,
              "attributes": {
                "URLText": "Success Stories",
                "url": "#",
                "createdAt": "2024-06-04T09:38:06.587Z",
                "updatedAt": "2024-06-04T09:38:07.490Z",
                "publishedAt": "2024-06-04T09:38:07.487Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 6,
              "attributes": {
                "URLText": "My Mentor Process",
                "url": "#",
                "createdAt": "2024-06-04T09:38:26.711Z",
                "updatedAt": "2024-06-04T09:38:27.714Z",
                "publishedAt": "2024-06-04T09:38:27.711Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 7,
              "attributes": {
                "URLText": "Interaction",
                "url": "#",
                "createdAt": "2024-06-04T09:38:43.749Z",
                "updatedAt": "2024-06-04T09:38:44.687Z",
                "publishedAt": "2024-06-04T09:38:44.685Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 8,
              "attributes": {
                "URLText": "Our Philosophy",
                "url": "#",
                "createdAt": "2024-06-04T09:39:11.099Z",
                "updatedAt": "2024-06-04T09:39:12.280Z",
                "publishedAt": "2024-06-04T09:39:12.278Z",
                "urlicon": {
                  "data": null
                }
              }
            }
          ]
        },
        "urlicon": {
          "data": null
        }
      }
    },
    {
      "id": 2,
      "attributes": {
        "URLText": "Weeding",
        "url": "#",
        "createdAt": "2024-06-04T09:40:16.115Z",
        "updatedAt": "2024-06-04T09:40:17.431Z",
        "publishedAt": "2024-06-04T09:40:17.428Z",
        "url_collections": {
          "data": [
            {
              "id": 5,
              "attributes": {
                "URLText": "Success Stories",
                "url": "#",
                "createdAt": "2024-06-04T09:38:06.587Z",
                "updatedAt": "2024-06-04T09:38:07.490Z",
                "publishedAt": "2024-06-04T09:38:07.487Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 6,
              "attributes": {
                "URLText": "My Mentor Process",
                "url": "#",
                "createdAt": "2024-06-04T09:38:26.711Z",
                "updatedAt": "2024-06-04T09:38:27.714Z",
                "publishedAt": "2024-06-04T09:38:27.711Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 7,
              "attributes": {
                "URLText": "Interaction",
                "url": "#",
                "createdAt": "2024-06-04T09:38:43.749Z",
                "updatedAt": "2024-06-04T09:38:44.687Z",
                "publishedAt": "2024-06-04T09:38:44.685Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 8,
              "attributes": {
                "URLText": "Our Philosophy",
                "url": "#",
                "createdAt": "2024-06-04T09:39:11.099Z",
                "updatedAt": "2024-06-04T09:39:12.280Z",
                "publishedAt": "2024-06-04T09:39:12.278Z",
                "urlicon": {
                  "data": null
                }
              }
            }
          ]
        },
        "urlicon": {
          "data": null
        }
      }
    },
    {
      "id": 2,
      "attributes": {
        "URLText": "M&M",
        "url": "#",
        "createdAt": "2024-06-04T09:40:16.115Z",
        "updatedAt": "2024-06-04T09:40:17.431Z",
        "publishedAt": "2024-06-04T09:40:17.428Z",
        "url_collections": {
          "data": [
            {
              "id": 5,
              "attributes": {
                "URLText": "Success Stories",
                "url": "#",
                "createdAt": "2024-06-04T09:38:06.587Z",
                "updatedAt": "2024-06-04T09:38:07.490Z",
                "publishedAt": "2024-06-04T09:38:07.487Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 6,
              "attributes": {
                "URLText": "My Mentor Process",
                "url": "#",
                "createdAt": "2024-06-04T09:38:26.711Z",
                "updatedAt": "2024-06-04T09:38:27.714Z",
                "publishedAt": "2024-06-04T09:38:27.711Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 7,
              "attributes": {
                "URLText": "Interaction",
                "url": "#",
                "createdAt": "2024-06-04T09:38:43.749Z",
                "updatedAt": "2024-06-04T09:38:44.687Z",
                "publishedAt": "2024-06-04T09:38:44.685Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 8,
              "attributes": {
                "URLText": "Our Philosophy",
                "url": "#",
                "createdAt": "2024-06-04T09:39:11.099Z",
                "updatedAt": "2024-06-04T09:39:12.280Z",
                "publishedAt": "2024-06-04T09:39:12.278Z",
                "urlicon": {
                  "data": null
                }
              }
            }
          ]
        },
        "urlicon": {
          "data": null
        }
      }
    },
    {
      "id": 5,
      "attributes": {
        "URLText": "Journal",
        "url": "#",
        "createdAt": "2024-06-04T09:40:16.115Z",
        "updatedAt": "2024-06-04T09:40:17.431Z",
        "publishedAt": "2024-06-04T09:40:17.428Z",
        "url_collections": {
          "data": [
            {
              "id": 5,
              "attributes": {
                "URLText": "Success Stories",
                "url": "#",
                "createdAt": "2024-06-04T09:38:06.587Z",
                "updatedAt": "2024-06-04T09:38:07.490Z",
                "publishedAt": "2024-06-04T09:38:07.487Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 6,
              "attributes": {
                "URLText": "My Mentor Process",
                "url": "#",
                "createdAt": "2024-06-04T09:38:26.711Z",
                "updatedAt": "2024-06-04T09:38:27.714Z",
                "publishedAt": "2024-06-04T09:38:27.711Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 7,
              "attributes": {
                "URLText": "Interaction",
                "url": "#",
                "createdAt": "2024-06-04T09:38:43.749Z",
                "updatedAt": "2024-06-04T09:38:44.687Z",
                "publishedAt": "2024-06-04T09:38:44.685Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 8,
              "attributes": {
                "URLText": "Our Philosophy",
                "url": "#",
                "createdAt": "2024-06-04T09:39:11.099Z",
                "updatedAt": "2024-06-04T09:39:12.280Z",
                "publishedAt": "2024-06-04T09:39:12.278Z",
                "urlicon": {
                  "data": null
                }
              }
            }
          ]
        },
        "urlicon": {
          "data": null
        }
      }
    },
    {
      "id": 6,
      "attributes": {
        "URLText": "Contact",
        "url": "#",
        "createdAt": "2024-06-04T09:40:16.115Z",
        "updatedAt": "2024-06-04T09:40:17.431Z",
        "publishedAt": "2024-06-04T09:40:17.428Z",
        "url_collections": {
          "data": [
            {
              "id": 5,
              "attributes": {
                "URLText": "Success Stories",
                "url": "#",
                "createdAt": "2024-06-04T09:38:06.587Z",
                "updatedAt": "2024-06-04T09:38:07.490Z",
                "publishedAt": "2024-06-04T09:38:07.487Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 6,
              "attributes": {
                "URLText": "My Mentor Process",
                "url": "#",
                "createdAt": "2024-06-04T09:38:26.711Z",
                "updatedAt": "2024-06-04T09:38:27.714Z",
                "publishedAt": "2024-06-04T09:38:27.711Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 7,
              "attributes": {
                "URLText": "Interaction",
                "url": "#",
                "createdAt": "2024-06-04T09:38:43.749Z",
                "updatedAt": "2024-06-04T09:38:44.687Z",
                "publishedAt": "2024-06-04T09:38:44.685Z",
                "urlicon": {
                  "data": null
                }
              }
            },
            {
              "id": 8,
              "attributes": {
                "URLText": "Our Philosophy",
                "url": "#",
                "createdAt": "2024-06-04T09:39:11.099Z",
                "updatedAt": "2024-06-04T09:39:12.280Z",
                "publishedAt": "2024-06-04T09:39:12.278Z",
                "urlicon": {
                  "data": null
                }
              }
            }
          ]
        },
        "urlicon": {
          "data": null
        }
      }
    },
  ]
  

  return (
    <>
      <div className="container position-realtive">
      <Subnavbar/>
        <div
          className="d-flex justify-space-between flex-lg-row flex-column event-container"
          style={{
            backgroundImage: `url(${images[currentIndex].img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          <div className="col-lg-5 p-3 mt-5">
            <p className="text-white">2023 | 1hour 40 Minutes | Horror</p>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              harum reprehenderit facilis unde voluptatem quaerat nihil magnam.
              Nemo eos labore, error autem at quam ad, impedit exercitationem
              aut nostrum enim?
            </p>
            <div className="d-flex gap-3">
              <button className="button-all px-4 py-2  text-black fw-bold" type="button ">
                Watch
              </button>
              <button className="button-all px-4 py-2  text-black fw-bold" type="button ">
                My List
              </button>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="carousel-container ">
              <div className="d-flex flex-column">
                <div className="carousel-items">
                  {/* Render 5 items on the screen */}
                  {Array(5)
                    .fill()
                    .map((_, index) => {
                      const imageItem =
                        images[
                          getCircularIndex(
                            currentIndex + index - 2,
                            images.length
                          )
                        ];
                      return (
                        <div
                      
                          key={index}
                          className={`${index === 2 ? "center" : "opacity"} ${
                            (index === 0 || index === 4) &&
                            "end d-none d-md-block d-lg-block"
                          }
                        ${
                          (index === 1 || index === 3) &&
                          "d-none d-md-block d-lg-block"
                        }`}
                          onClick={() =>
                            handleItemClick(
                              getCircularIndex(
                                currentIndex + index - 2,
                                images.length
                              )
                            )
                          }
                        >
                          <img className="h-50 img-home-slider" src={imageItem.img} alt="item" />
                        </div>
                      );
                    })}
                </div>
                
              </div>
            </div>
          </div>
        </div>

     
     
      </div>
    </>
  );
};
export default Slider;
