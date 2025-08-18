import React from "react";

const OrderDetail = () => {
  return (
    <div>
      {/* <!-- Services Section --> */}
      <section className="services-section">
        <div className="auto-container">
          <div className="sec-title style-two">
            <h2>Jasmine Albeshir</h2>
            <div className="text">
              You can track the progress of your order using this page. We will
              constantly update this page to let you know how we are
              progressing. As soon as we are done with the order, the status
              will turn green. That means your car is ready for pickup.
            </div>

            <div className="row flex-1">
              <div className="col-lg-6 service-block-one">
                <div className="inner-box hvr-float-shadow">
                  <h5>CUSTOMER</h5>
                  <h2>Jasmine Albeshir</h2>
                  <h4>Email:jasmine@gmail.com</h4>
                  <h4>Phone Number:240835487</h4>
                  <h4>Active Customer:Yes</h4>
                </div>
              </div>
              <div className="col-lg-6 service-block-one">
                <div className="inner-box hvr-float-shadow">
                  <h5>CAR IN SERVICE</h5>
                  <h2>BMW X7 (Gold)</h2>
                  <h4>Vehicle tag:0101AD</h4>
                  <h4>Vehicle year:2020</h4>
                  <h4>Vehicle mileage:1200</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-lg-10 col-md-10 service-block-one">
              <div
                className="inner-box hvr-float-shadow text-start"
                style={{ border: "none" }}
              >
                <h5>BMW X7</h5>
                <h2>Requested Service</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-lg-10 col-md-10 service-block-one">
              <div
                className="inner-box hvr-float-shadow text-start"
                style={{ border: "none" }}
              >
                <h2>Tire repairs and changes</h2>
                <h4>
                  <span style={{ color: "black" }}>
                    Properly inflated tires ensure optimal speed, control, and
                    fuel efficiency. Regular maintenance can prevent leaks and
                    excessive wear.
                  </span>
                </h4>
                <div className="text-end mt-3">
                  <button className="btn btn-warning">In Progress</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-lg-10 col-md-10 service-block-one">
              <div
                className="inner-box hvr-float-shadow text-start"
                style={{ border: "none" }}
              >
                <h2>Oil Changes</h2>
                <h4>
                  <span style={{ color: "black" }}>
                    Regular oil changes are essential for maintaining engine
                    performance and longevity, helping to reduce wear and
                    prevent costly repairs.
                  </span>
                </h4>
                <div className="text-end mt-3">
                  <button className="btn btn-warning">In Progress</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-lg-10 col-md-10 service-block-one">
              <div
                className="inner-box hvr-float-shadow text-start"
                style={{ border: "none" }}
              >
                <h2>Brake Services</h2>
                <h4>
                  <span style={{ color: "black" }}>
                    Regular brake inspections and maintenance are crucial for
                    safety, ensuring that your braking system operates
                    effectively to prevent accidents.
                  </span>
                </h4>
                <div className="text-end mt-3">
                  <button className="btn btn-warning">In Progress</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-lg-10 col-md-10 service-block-one">
              <div
                className="inner-box hvr-float-shadow text-start"
                style={{ border: "none" }}
              >
                <h2>Battery Replacement</h2>
                <h4>
                  <span style={{ color: "black" }}>
                    A reliable battery is vital for your vehicle’s starting
                    system. Regular checks can prevent unexpected breakdowns and
                    ensure smooth operation.
                  </span>
                </h4>
                <div className="text-end mt-3">
                  <button className="btn btn-warning">In Progress</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-lg-10 col-md-10 service-block-one">
              <div
                className="inner-box hvr-float-shadow text-start"
                style={{ border: "none" }}
              >
                <h2>Fluid Checks</h2>
                <h4>
                  <span style={{ color: "black" }}>
                    Regular fluid checks, including coolant and transmission
                    fluid, are essential for maintaining vehicle performance and
                    preventing overheating or mechanical failure.
                  </span>
                </h4>
                <div className="text-end mt-3">
                  <button className="btn btn-warning">In Progress</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-lg-10 col-md-10 service-block-one">
              <div
                className="inner-box hvr-float-shadow text-start"
                style={{ border: "none" }}
              >
                <h2>Additional request</h2>
                <h4>
                  <span style={{ color: "black" }}>
                    If you have further inquiries or need additional services,
                    please don't hesitate to reach out. We are here to assist
                    you with any specific maintenance needs or concerns you may
                    have regarding your vehicle. Your satisfaction and safety
                    are our top priorities, and we strive to provide the best
                    service possible. Thank you for choosing us!
                  </span>
                </h4>
                <div className="text-end mt-3">
                  <button className="btn btn-warning">In Progress</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderDetail;
