"use client";
import React, { useEffect, useState } from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import { MdArrowDropUp } from "react-icons/md";

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
        "URLText": "Wedding",
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
      <div className="container-fluid position-realtive">
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
            {/* <img
            className="img-home-slider"
              style={{ width: "190px", height: "94px" }}
              src="./asserts/images/demigodnew.png"
            ></img> */}
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

        <div className=' d-flex  header-hover  col-lg-10  position-fixed top-0 justify-content-center align-items-center   '>
         
            <div className='d-flex justify-content-between '>
              <img className='logoImage' src='./asserts/images/demigodnew.png'></img>

              <div className='d-flex  justify-content-center align-items-center gap-2  headerlist  '>
                {
                  data.map((item, i) => {
                    return (
                      <>
                        {
                          item.attributes.
                            url_collections.data.length !== 0 ?
                            <div>
                              <ul className='ul-custom custom-sub-opacity hover mb-0'>
                                <li className=' linehight fs-6'>
                                 <div className='d-flex'>
                                 <p className=' fs-6 fw-bold  header-text-new'> {item.attributes.URLText}</p>
                                 <MdArrowDropUp size={34} className="header-drop-icon "  />
                                 
                                 </div>

                                  <div style={{ left: "0%", top: '6.5rem', zIndex: '1' }} className='custom-opacity w-100  bg-white d-flex border-top position-absolute  align-items-center '>
                                    <div className='d-flex gap-4 bg-black  p-5'>
                                      {/* <div className='col-lg-6 bg-warning'></div>
                                      <div className='col-lg-6 d-flex justify-content-center align-items-center gap-5 w-100 text-center d-flex gap-5 w-100 text-center'>
                                        {
                                          item.attributes.
                                            url_collections.data.map((list, i) => {
                                              return (
                                                <p className=' fw-500 mb-1 '>{list.attributes.URLText}</p>
                                              )
                                            })
                                        }

                                      </div> */}
                                      <div style={{ lineHeight: "24px" }} className='col-lg-4  text-white'>
                                        <h1 className='fw-bold'>ABOUT DEMIGOD</h1>
                                        <p className='smallfont' >Demigod is about consectetur adipisicing elit. Eaque, quos natus rerum maiores est non delectus aspernatur, similique repudiandae tempora obcaecati molestiae nostrum deleniti totam. Consequuntur harum ut ullam esse?</p>
                                      <div style={{lineHeight:'2px'}}>
                                          <p className='m-0'>About World of Demigod</p>
                                          <hr />
                                      </div>
                                      </div>
                                      <div style={{ lineHeight: "24px" }} className='col-lg-5 text-white '>
                                        <div style={{ lineHeight: '2px' }}>
                                          <p className='fw-bold'>                                        About Us
                                          </p>
                                          <hr />
                                        </div>
                                        <div className='d-flex gap-3 des-header'>
                                          <div className='col-lg-6'>
                                            <p className='m-0 fw-bold'>Our Team</p>
                                            <p className='smallfont'>The Amazing Team sit amet  adipisicing elit. Cupiditate eum error nulla mollitia sunt ullam suscipit quis!</p>
                                          </div>
                                          <div className='col-lg-6'>
                                            <p className='m-0 fw-bold'>Carrer at Now</p>
                                            <p className='smallfont'>Carrer kob listing , sit amet  adipisicing elit. Cupiditate eum error nulla mollitia sunt ullam suscipit quis!</p>
                                          </div>
                                        </div>
                                        <div className='d-flex gap-3'>
                                          <div className='col-lg-6'>
                                            <p className='m-0 fw-bold'>Our Partner</p>
                                            <p className='smallfont'>Explore demigod partnership adipisicing elit. Cupiditate eum error nulla mollitia sunt ullam suscipit quis!</p>
                                          </div>
                                          <div className='col-lg-6'>
                                            <p className='m-0  fw-bold'>Contact With us</p>
                                            <p className='smallfont'>If You need to talk, sit amet  adipisicing elit. Cupiditate eum error nulla mollitia sunt ullam suscipit quis!</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='col-lg-2 '>
                                        <img className='img-fluid' src='/asserts/images/smallImage.jpg'></img>
                                      </div>
                                    </div>


                                  </div>
                                </li>
                              </ul>



                            </div> :
                            <Link className=' decoration-none d-flex justify-content-center align-items-center gap-5  mb-3 headerlist list-text' href='#'>{item.attributes.URLText}</Link>
                        }

                      </>
                    )
                  })
                }
              </div>
              <div className=' d-flex justify-content-center align-items-center mx-3  mb-3'>
            <button  className='rounded-pill border-0 fs-6 px-4 text-white fw-bold  button-bg  '>SIGN UP</button>
          </div>
            
            </div>
           
          </div>
          
        </div>
     
      
    </>
  );
};
export default Slider;
