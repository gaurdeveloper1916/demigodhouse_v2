'use client'
import React, { useState } from 'react';
import './style.css'
import { RxHamburgerMenu } from "react-icons/rx";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap';
import Link from 'next/link';


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
      <div className='container-fluid p-0 d-lg-block d-none '>
        <div className='col-12  d-flex px-5 position-relative'>
          <div className='d-flex col-lg-9 '>
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
                                  <p className='list-text fs-6'> {item.attributes.URLText}</p>
                                  <div style={{ left: "0%", top: '6.5rem', zIndex: '1' }} className='custom-opacity w-100  bg-white d-flex border-top position-absolute  align-items-center '>
                                    <div className='d-flex'>
                                      <div className='col-lg-6 '></div>
                                      <div className='col-lg-6 d-flex justify-content-center align-items-center gap-5 w-100 text-center d-flex gap-5 w-100 text-center   '>
                                        {
                                          item.attributes.
                                            url_collections.data.map((list, i) => {
                                              return (
                                                <p className=' fw-500 mb-1 '>{list.attributes.URLText}</p>
                                              )
                                            })
                                        }

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
          </div>
          <div className='col-lg-3 d-flex justify-content-center align-items-center gap-4 mb-3'>
            <p className='pt-3'>(+91)91 2988 8502</p>
            <button style={{ fontSize: '16px' }} className='rounded-pill px-3 py-2 border-0 text-white bg-danger '>Quick Enquiry</button>
          </div>
        </div>
        {/* <div className='d-flex border-top  justify-content-center align-items-center subHeader'>
                    <div className='col-lg-8 d-flex gap-5 text-center py-4'>
                        <p className='border-bottom fw-500'>All Services</p>
                        <p className='border-bottom fw-500'>Career Counseling</p>
                        <p className='border-bottom fw-500'>Study Abroad</p>
                        <p className='border-bottom fw-500'>Test Preparation</p>
                    </div>
                </div> */}
      </div>
      <div className='container-fluid p-0 d-lg-none d-block p-2'>
        <div className='d-flex justify-content-between'>
          <img className='w-25' src='/img/logo.png'></img>
          {/* <RxHamburgerMenu className='mt-2 ' size={35} /> */}
          <OffCanvasExample placement='end' name='end' data={data} />

        </div>
      </div>
    </>



  );
}

export default Navbar;