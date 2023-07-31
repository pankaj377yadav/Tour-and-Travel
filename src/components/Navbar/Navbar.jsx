import { useState } from "react";
import React from "react";
import "./navbar.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SiPlatformdotsh } from "react-icons/si";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  // Function to taggle navBar

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  // Function to remove navBar

  const removeNavbar = () => {
    setActive("navBar");
  };
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" /> Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex ">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <SiPlatformdotsh className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
