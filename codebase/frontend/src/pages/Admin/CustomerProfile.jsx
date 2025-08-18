import React from 'react';

const CustomerProfile = () => {
  return (
    <div>
      {/* History Section */}
      <section className="history-section">
        <div className="auto-container">
          <div className="history-block">
            <div className="years">Info</div>
            <div className="content">
              <h4>Customer: Tadesse Solomon</h4>
              <div className="text">
                <h6>Email</h6>
                <h6>Phone Number</h6>
                <h6>Active Customer</h6>
                <h6>Edit Customer Info</h6>
              </div>
            </div>
          </div>
          <div className="history-block">
            <div className="years">Cars</div>
            <div className="content">
              <h4>Vehicles of Tadesse</h4>
              <div className="contact-section">
                <div className="form-column col-lg-7">
                  <div className="inner-column">
                    {/* Contact Form */}
                    <div className="contact-form">
                      <form method="post" action="sendemail.php" id="contact-form">
                        <div className="row clearfix">
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="vehicleYear"
                              placeholder="Vehicle Year"
                              required
                            />
                          </div>

                          {/* Submit Button */}
                          <div className="form-group col-md-12">
                            <input
                              id="form_botcheck"
                              name="form_botcheck"
                              className="form-control"
                              type="hidden"
                              value=""
                            />
                            <button
                              className="theme-btn btn-style-one"
                              type="submit"
                              data-loading-text="Please wait..."
                            >
                              <span>Add Vehicle</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Orders Section */}
          <div className="history-block">
            <div className="years">Orders</div>
            <div className="content">
              <h6>Order of Tadesse</h6>
              <div className="text">
                Orders will be displayed here.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerProfile;