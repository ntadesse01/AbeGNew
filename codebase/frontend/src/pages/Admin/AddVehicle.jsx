import React from "react";
import TextInput from "../../components/Input/TextInput";
 

const AddVehicle = () => {
  return (
    <div>
      {/* History Section */}
      <section className="history-section">
        <div className="auto-container">
          <div className="history-block">
            <div className="years">Info</div>
            <div className="content">
              <h4>Customer:Tadesse Solomon</h4>
              <div className="text">
                <h6>Email</h6>
                <h6>Phone Number</h6>
                <h6>Active Customer</h6>
                <h6>Edit Customer info</h6>
              </div>
            </div>
          </div>
          <div className="history-block">
            <div className="years">Cars</div>
            <div className="content">
              <h4>Vehicles of Tadesse</h4>
              <div className="text">
                Everyone seeks pleasure and avoids pain. However, there are
                times when hard work and effort can lead to great rewards. For
                instance, many people engage in rigorous exercise, not just for
                the sake of it, but to achieve health benefits or personal
                goals.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Add New Vehicle</h2>
          </div>

          {/* Form Column */}
          <div className="form-column col-lg-7">
            <div className="inner-column">
              {/* Contact Form */}
              <div className="contact-form">
                <form method="post" action="sendemail.php" id="contact-form">
                  <div className="row clearfix">
                    <TextInput name="vehicleYear" type="text" placeholder="Vehicle Year" />
                    <TextInput name="vehicleMake" type="text" placeholder="Vehicle Make" />
                    <TextInput name="vehicleModel" type="text" placeholder="Vehicle Model" />
                    <TextInput name="vehicleType" type="text" placeholder="Vehicle Type" />
                    <TextInput name="vehicleMileage" type="text" placeholder="Vehicle Mileage" />
                    <TextInput name="vehicleTag" type="text" placeholder="Vehicle Tag" />
                    <TextInput name="vehicleSerial" type="text" placeholder="Vehicle Serial" />
                    <TextInput name="vehicleColor" type="text" placeholder="Vehicle Color" />

                    <input
                      id="form_botcheck"
                      name="form_botcheck"
                      className="form-control"
                      type="hidden"
                      value=""
                    />
                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>Add Vehicle</span>
                      </button>
                    </div>
                    <div className="history-block">
                      <div className="years">Orders</div>
                      <div className="content">
                        <h6>Order of Tadesse</h6>
                        <div className="text">
                          Orders will displayed here.
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
