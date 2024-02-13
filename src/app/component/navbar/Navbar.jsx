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
  <div className="container-fluid bg-dark m-0">
  <div style={{ width: "130px", }} className="mx-lg-3">
  <img
    src="./asserts/images/demigodnew.png"
    alt="Logo"
    className="w-100 h-100"
    style={{ objectFit: "cover" }}
  />
</div>
    <div className="d-flex gap-2 ms-auto">
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
    <div className="collapse d-flex justify-content-end align-items-center navbar-collapse " id="navbarSupportedContent">
  <ul className="navbar-nav d-flex justify-content-center align-items-center ">
    {navItem.map((item, i) => (
      <li key={i + 1} className="nav-item ">
        <a href="" className="nav-link active mt-2">
          <p className="item-test p-2 fs-6">{item}</p>
        </a>
      </li>
    ))}
  </ul>
  <div className="d-flex justify-content-between gap-2">
    <a href="/#eventOnMap" className="d-lg-block d-none mb-2">
      <CiLocationOn color="yellow" size={27} />
    </a>
    <CiUser color="yellow" size={27} />
  </div>
</div>
  </div>
</nav>
    </>
  );
}
export default Navbar;