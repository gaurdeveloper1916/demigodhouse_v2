"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

function Navbar() {
  const navItem = [
    "Events",
    "Corporate",
    "Weddings",
    "Catering",
    "Media",
    "Journel",
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className="container-fluid bg-dark m-0 my-0">
          <div classNameName="">
            <img
              style={{ width: "190px", height: "94px" }}
              src="./asserts/images/demigodnew.png"
            ></img>
          </div>{" "}
          <div className="d-flex gap-2">
            <CiLocationOn
              className="cursor-pointer d-lg-none d-block"
              color="yellow"
              size={40}
            />
            <CiUser
              className="cursor-pointer d-lg-none d-block"
              color="yellow "
              size={40}
            />
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse  justify-content-end"
            id="navbarSupportedContent"
          >
            <div className="d-flex   align-items-center" role="search">
              <ul className="navbar-nav ml-auto d-flex ">
                {navItem.map((item, i) => {
                  return (
                    <li
                      style={{ textDecoration: "none" }}
                      key={i + 1}
                      className="nav-item mt-3 "
                    >
                      <a href="" className="nav-link active ">
                        <p className="item-test p-2 fs-6">{item}</p>
                      </a>
                    </li>
                  );
                })}
              </ul>
             <div className="d-flex gap-3">
          <a href="/#eventOnMap">
          <CiLocationOn
                className="cursor-pointer d-lg-block d-none"
                color="yellow"
                size={30}
              />
          </a>
              <CiUser
                className="cursor-pointer d-lg-block d-none"
                color="yellow "
                size={30}
              />
             </div>
            </div>
          </div>
          {/* <div className="collapse navbar-collapse  justify-content-end">
            <ul className="navbar-nav  navbar_list gap-lg-3 gap-1 mx-lg-5">
              {navItem?.map((item, index) => {
                return (
                  <li className="nav-item bg-white " key={index}>
                    <Link
                    href='#'
                      className=" "
                      to={item.menu_link}
                     
                    >
                      {item.menu_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
