import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

function HomeHeader() {
  return (
    <header className="main__header">
      <div className="container main__header--container">
        <div className="main__header--left">
          <h4>#100 Days of Javascript</h4>
          <h1>Join the Legends of the Javascript World Fitness</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            quis deleniti, minus suscipit nostrum inventore?
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header--right">
          <div className="main__header--circle"></div>
          <div className="main__header--image">
            <img src={Image} alt="not found" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
