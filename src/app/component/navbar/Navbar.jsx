'use client'
import React, { useState } from 'react';
import './style.css'
import { RxHamburgerMenu } from "react-icons/rx";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { MdArrowDropUp } from 'react-icons/md';


function OffCanvasExample() {
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="me-2">
                {name}
            </Button> */}
      <RxHamburgerMenu onClick={handleShow} className='mt-2 ' size={35} />
      <Offcanvas show={show} onHide={handleClose} placement='end' name='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >
            <img className='logoImage' src='./asserts/images/demigodnew.png'></img>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            data.map((item, i) => {
              return (
                <>

                  <div>
                    <Accordion >
                      <Accordion.Item eventKey="0" className='w-100'>
                        <Accordion.Header>{item.attributes.URLText}</Accordion.Header>
                        <Accordion.Body className='p-3'>
                          {
                            item.attributes.
                              url_collections.data.map((list, i) => {
                                return (
                                  <p className='hover'>  {list.attributes.URLText}   </p>

                                )
                              })
                          }
                        </Accordion.Body>
                        <hr className='m-0' />
                      </Accordion.Item>
                    </Accordion>
                    {/* <Accordion.Header>Our Services</Accordion.Header> */}
                  </div>
                </>
              )
            })
          }

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function Navbar() {
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
  console.log(data)
  return (
    <>
    <div>
      
    </div>
      <div className='container-fluid p-0 d-lg-block d-none '>
        <div className='col-12  d-flex justify-content-center align-items-center px-5 position-relative bg-black'>
          <div className='d-flex col-lg-10 '>
            <div className='d-flex gap-5'>
              <img className='logoImage' src='./asserts/images/demigodnew.png'></img>

              <div className='d-flex justify-content-center align-items-center gap-2 mx-5 headerlist  '>
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
                                 <p className='list-text fs-6 fw-bold text-white'> {item.attributes.URLText}</p>
                                 <MdArrowDropUp className='mt-4' size={30} color='white' />
                                 
                                 </div>

                                  <div style={{ left: "0%", top: '6.5rem', zIndex: '1' }} className='custom-opacity w-100  bg-white d-flex border-top position-absolute  align-items-center '>
                                    <div className='d-flex gap-4 bg-black w-100 p-5'>
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
            
            </div>
            <div className='col-lg-3 d-flex justify-content-center align-items-center gap-4 mb-3'>
            <button  className='rounded-pill border-0 fs-6 px-4 text-white fw-bold  button-bg  '>SIGN UP</button>
          </div>
          </div>
          
        </div>
     
      </div>


      <div className='container-fluid p-0 d-lg-none d-block p-2'>
        <div className='d-flex justify-content-between'>
          <img className='w-25' src='./asserts/images/demigodnew.png'></img>
          {/* <RxHamburgerMenu className='mt-2 ' size={35} /> */}
          <OffCanvasExample placement='end' name='end' data={data} />

        </div>
      </div>
    </>



  );
}

export default Navbar;