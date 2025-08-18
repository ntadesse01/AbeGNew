import React from "react";

const NewOrderStep2 = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Create a New Order</h2>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-7">
              <div className="inner-column">
                {/* <!--Contact Form--> */}
                <div className="contact-form">
                  <form method="post" action="sendemail.php" id="contact-form">
                    <div className="row clearfix">
                      <div className="form-group col-12">
                        <input
                          style={{width: "100%"}}
                          type="email"
                          name="email"
                          value=""
                          placeholder="Employee Email"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewOrderStep2;