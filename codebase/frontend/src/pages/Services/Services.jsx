import React from 'react'
import Image4 from "../../assets/images/resource/image-4.jpg"
import { Link } from 'react-router-dom'
import Bg3 from "../../assets/images/background/bg-3.jpg";

 

const Services = () => {
  return (
    <div>

<section
        className="page-title"
        style={{ backgroundImage: `url(${Bg3})`}}
      >
        <div className="auto-container ">
          <h2>Our Services</h2>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/about">home</Link>
            </li>
            <li>Services</li>
          </ul>
        </div>
        <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
      </section>






{/* 
<!-- Services Section --> */}
    <section class="services-section">
        <div class="auto-container">
            <div class="sec-title style-two">
                <h2>Our Services</h2>
                <div class="text">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. </div>
            </div>
            <div class="row">
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Performance Upgrade</h2>
                        <a href="#" class="read-more">read more  +</a>
                        <div class="icon"><span class="flaticon-power"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Transmission Services</h2>
                        <a href="#" class="read-more">read more  +</a>
                        <div class="icon"><span class="flaticon-gearbox"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Break Repair & Service</h2>
                        <a href="#" class="read-more">read more  +</a>
                        <div class="icon"><span class="flaticon-brake-disc"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Engine Service & Repair</h2>
                        <a href="#" class="read-more">read more  +</a>
                        <div class="icon"><span class="flaticon-car-engine"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Tyre & Wheels</h2>
                        <a href="#" class="read-more">read more  +</a>
                        <div class="icon"><span class="flaticon-tire"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Denting & Painting</h2>
                        <a href="#" class="read-more">read more  +</a>
                        <div class="icon"><span class="flaticon-spray-gun"></span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>


{/* 
    <!-- Why Choose Us --> */}
    <section class="why-choose-us">
        <div class="auto-container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="sec-title style-two">
                        <h2>Why Choose Us</h2>
                        <div class="text">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation heading towards.</div>
                    </div>
                    <div class="icon-box">
                        <div class="icon"><span class="flaticon-mechanic"></span></div>
                        <h4>Certified Expert Mechanics</h4>
                    </div>
                    <div class="icon-box">
                        <div class="icon"><span class="flaticon-wrench"></span></div>
                        <h4>Fast And Quality Service</h4>
                    </div>
                    <div class="icon-box">
                        <div class="icon"><span class="flaticon-price-tag-1"></span></div>
                        <h4>Best Prices in Town</h4>
                    </div>
                    <div class="icon-box">
                        <div class="icon"><span class="flaticon-trophy"></span></div>
                        <h4>Awarded Workshop</h4>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="sec-title style-two">
                        <h2>Addtional Services</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="image"><img src={Image4}alt=""/></div>
                        </div>
                        <div class="col-md-7">
                            <ul class="list">
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






    </div>
  )
}

export default Services