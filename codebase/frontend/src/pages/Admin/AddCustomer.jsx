import React from 'react';

const AddCustomer = () => {
  return (
    <div className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add New Customer</h2>
        </div>
      </div>

      {/* Form Column */}
      <div className="form-column col-lg-4">
        <div className="inner-column">
          {/* Contact Form */}
          <div className="contact-form">
            <form method="post" action="sendemail.php" id="contact-form">
              <div className="row clearfix">
                <div className="form-group col-md-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Customer Email"
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Customer First Name"
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Customer Last Name"
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                </div>

                <button
                  className="theme-btn btn-style-one"
                  type="submit"
                  data-loading-text="Please wait...">
                  <span>Add Customer</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;