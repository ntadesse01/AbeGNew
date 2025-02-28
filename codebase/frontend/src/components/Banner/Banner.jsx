import React from "react";
import bgImage from "../../assets/images/background/bg-3.jpg";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div>
      <section
        className="page-title"
        style={{
          backgroundImage: `url(${bgImage})`

        }}
     
      >
        <div className="auto-container">
          <h2>Contact</h2>
          <ul className="page-breadcrumb">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
      </section>
    </div>
  );
};

export default Banner;
