import React from "react";
import TextInput from "../../components/Input/TextInput";
 

const LogIn = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Login to your account</h2>
          </div>

          <div className="row clearfix">
            {/* <!--Form Column--> */}
            <div className="form-column col-lg-7">
              <div className="inner-column">
                {/* <!--Contact Form--> */}
                <div className="contact-form">
                  <form method="post" action="sendemail.php" id="contact-form">
                    <div className="row clearfix">
                      <TextInput name="email" type="text" placeholder="Your Email" />
                      <TextInput name="password" type="password" placeholder="Password" />

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
                          <span>Login</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!--End Contact Form--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
