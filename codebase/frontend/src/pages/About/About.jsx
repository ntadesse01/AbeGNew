import React from "react";
import VbanOne from "../../assets/images/custom/misc/vban1.jpg";
import VbanTwo from "../../assets/images/custom/misc/vban2.jpg";
import { Link } from "react-router-dom";
import Image8 from "../../assets/images/resource/image-8.jpg";
import Image9 from "../../assets/images/resource/image-9.jpg";
import backgroundImage from "../../assets/images/background/bg-1.jpg";
import Image4 from "../../assets/images/resource/image-4.jpg";
import Bg3 from "../../assets/images/background/bg-3.jpg";

const About = () => {
  return (
    <div>
      {/* <!-- Page Title --> */}
      <section
        className="page-title"
        style={{ backgroundImage: `url(${Bg3})`}}
      >
        <div className="auto-container">
          <h2>About us</h2>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/about">home</Link>
            </li>
            <li>About us</li>
          </ul>
        </div>
        <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
      </section>

      {/* <!-- About Section Three --> */}
      <section className="about-section-three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-7">
              <div className="content">
                <h2>
                  We are highly skilled mechanics <br /> for your car repair
                </h2>
                <div className="text">
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution. User
                    generated content in real-time will have multiple
                    touchpoints for offshoring.
                  </p>
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark
                    value-added activity to beta test. Override the digital
                    divide with additional clickthroughs from DevOps.
                    Nanotechnology immersion along the information highway will
                    close the loop on focusing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image">
                <img src={Image8} alt="Car repair" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Us --> */}
      <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5">
              <div className="image-box">
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <img src={VbanOne} alt="Pic1" />
                  <img src={VbanTwo} alt="Pic2" />
                </div>
                <div className="year-experience" data-parallax='{"y": 30}'>
                  <strong>17</strong> years <br />
                  Experience
                </div>
              </div>
            </div>
            <div className="col-lg-7 pl-lg-5">
              <div className="sec-title">
                <h5>Welcome to Our workshop</h5>
                <h2>We have 24 years experience</h2>
                <div className="text">
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution. User
                    generated content in real-time will have multiple touch
                    points for offshoring.
                  </p>
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional click throughs from DevOps. Nanotechnology
                    immersion along the information highway will close the loop
                    on focusing.
                  </p>
                </div>
                <div className="link-btn mt-40">
                  <Link
                    to="/about"
                    className="theme-btn btn-style-one style-two"
                  >
                    <span>
                      About Us <i className="flaticon-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Why Choose Us --> */}
      <section className="why-choose-us">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec-title style-two">
                <h2>Why Choose Us</h2>
                <div className="text">
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation heading towards.
                </div>
              </div>
              <div className="icon-box">
                <div className="icon">
                  <span className="flaticon-mechanic"></span>
                </div>
                <h4>Certified Expert Mechanics</h4>
              </div>
              <div className="icon-box">
                <div className="icon">
                  <span className="flaticon-wrench"></span>
                </div>
                <h4>Fast And Quality Service</h4>
              </div>
              <div className="icon-box">
                <div className="icon">
                  <span className="flaticon-price-tag-1"></span>
                </div>
                <h4>Best Prices in Town</h4>
              </div>
              <div className="icon-box">
                <div className="icon">
                  <span className="flaticon-trophy"></span>
                </div>
                <h4>Awarded Workshop</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-title style-two">
                <h2>Addtional Services</h2>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div className="image">
                    <img src={Image4} alt="Pic1" />
                  </div>
                </div>
                <div className="col-md-7">
                  <ul className="list">
                    <li>General Auto Repair & Maintenance</li>
                    <li>Transmission Repair & Replacement</li>
                    <li>Tire Repair and Replacement</li>
                    <li>State Emissions Inspection</li>
                    <li>Break Job / Break Services</li>
                    <li>Electrical Diagnostics</li>
                    <li>Fuel System Repairs</li>
                    <li>Starting and Charging Repair</li>
                    <li>Steering and Suspension Work</li>
                    <li>Emission Repair Facility</li>
                    <li>Wheel Alignment</li>
                    <li>Computer Diagaonstic Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Why Choose Us Two --> */}
      {/* <section className="why-choose-us-two"> 
        <div className="auto-container">
          <div className="row no-gutters">
            <div className="col-xl-6 left-column">
              <div className="inner-container">
                <div className="sec-title style-two light">
                  <h2>Why Choose Us</h2>
                </div>
                <div className="icon-box">
                  <div className="icon"><span className="flaticon-repair"></span></div>
                  <div>
                    <h4>Smart Technology</h4>
                    <div className="text">Leverage agile frameworks to provide a robust synopsis for <br /> high level overviews. Iterative approaches to corporate strategy <br /> foster collaborative thinking to further.</div>
                  </div>                                 
                </div>
                <div className="icon-box">
                  <div className="icon"><span className="flaticon-price-tag"></span></div>
                  <div>
                    <h4>Best & Reasonable Prices</h4>
                    <div className="text">Leverage agile frameworks to provide a robust synopsis for <br /> high level overviews. Iterative approaches to corporate strategy <br /> foster collaborative thinking to further.</div>
                  </div>                                 
                </div>
                <div className="icon-box">
                  <div className="icon"><span className="flaticon-fast-time"></span></div>
                  <div>
                    <h4>Timely Delivery</h4>
                    <div className="text">Leverage agile frameworks to provide a robust synopsis for <br /> high level overviews. Iterative approaches to corporate strategy <br /> foster collaborative thinking to further.</div>
                  </div>                                 
                </div>
              </div>
            </div>
            <div className="col-xl-6 right-column" style={{ backgroundImage: "url(" + Image9 + ")" }}>
              <div className="image"><img src={Image9} alt="Pic4" /></div> 
            </div>
          </div>
        </div>
      </section> */}

      {/* 
         
    {/* <!-- Video Section --> */}
      <section className="video-section">
        <div
          data-parallax='{"y": 50}'
          className="sec-bg"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="auto-container">
          <h5>Working since 1992</h5>
          <h2>
            We are leader <br /> in Car Mechanical Work
          </h2>
          <div className="video-box">
            <div className="video-btn">
              <a
                href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                className="overlay-link lightbox-image video-fancybox ripple"
              >
                <i className="flaticon-play"></i>
              </a>
            </div>
            <div className="text">
              Watch intro video <br /> about us
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
