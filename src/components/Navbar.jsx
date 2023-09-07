import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../images/logo.png";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const toggleNavBar = () => {
    setIsNavShowing((prev) => !prev);
  };
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => toggleNavBar()}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle-btn" onClick={() => toggleNavBar()}>
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
