import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/custom/logo.png";
import IconBar from "../../assets/images/icons/icon-bar.png";
import LogoTwo from "../../assets/images/icons/icon-bar-2.png";


const Header = () => {
  return (
    <div>
      {/* <!-- Main Header --> */}
      <header className="main-header header-style-one">
        {/* <!-- Header Top --> */}
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                <div className="text">Enjoy the Beso while we fix your car</div>
                <div className="office-hour">
                  Monday - Saturday 7:00AM - 6:00PM
                </div>
              </div>
              <div className="right-column">
                <div className="phone-number">
                  Schedule Your Appontment Today :{" "}
                  <strong>1800 456 7890</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Header Upper --> */}
        <div className="header-upper ">
          <div className="auto-container">
            <div className="inner-container">
              {/* <!--Logo--> */}
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="right-column">
                {/* <!--Nav Box--> */}
                <div className="nav-outer">
                  {/* <!--Mobile Navigation Toggler--> */}
                  <div className="mobile-nav-toggler">
                    <img src={IconBar} alt="" />
                  </div>

                  {/* <!-- Main Menu --> */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      // className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li className="dropdown">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/about">About Us</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/services">Services</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="search-btn"></div>
                <div className="link-btn">
                  <Link to="/login" className="theme-btn btn-style-one">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Header Upper--> */}

        {/* 


        {/* <!-- Sticky Header  --> */}
        <div className="sticky-header">
          {/* <!-- Header Upper --> */}
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container">
                {/* <!--Logo--> */}
                <div className="logo-box">
                  <div className="logo">
                    <Link to="/">
                      <img src={Logo} alt="Log" />
                    </Link>
                  </div>
                </div>
                <div className="right-column">
                  {/* <!--Nav Box--> */}
                  <div className="nav-outer">
                    {/* <!--Mobile Navigation Toggler--> */}
                    <div className="mobile-nav-toggler">
                      <img src={IconBar} alt="Mobile Menu" />
                    </div>

                    {/* <!-- Main Menu --> */}
                    <nav className="main-menu navbar-expand-md navbar-light"></nav>
                  </div>
                  <div className="search-btn"></div>
                  <div className="link-btn">
                    <Link to="/login" className="theme-btn btn-style-one">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Header Upper--> */}
        </div>
        {/* <!-- End Sticky Menu --> */}

        {/* <!-- Mobile Menu  --> */}
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon flaticon-remove"></span>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <Link to="/">
                <img src={LogoTwo} alt="Logo" title="Logo" />
              </Link>
            </div>
            <div className="menu-outer">
              {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            </div>
          </nav>
        </div>
        {/* <!-- End Mobile Menu --> */}

        <div className="nav-overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
      </header>
      {/* <!-- End Main Header --> */}
    </div>
  );
};

export default Header;
