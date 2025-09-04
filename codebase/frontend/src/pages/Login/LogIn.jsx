import React, { useState } from "react";
import TextInput from "../../components/Input/TextInput";
import axios from "../../config/axios"


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const data = {
      email: email,
      password: password
    }
    try {
      const result = await axios.post("/login",data)
    } catch (error) {
      console.log(error)
    }
  };
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
                <form method="post" onSubmit={handleSubmit}>
                  <div className="contact-form">
                    <div className="row clearfix">
                      <TextInput
                        name="email"
                        type="text"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => {
                          e.preventDefault();
                          setEmail(e.target.value);
                        }}
                      />
                      <TextInput
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          e.preventDefault();
                          setPassword(e.target.value);
                        }}
                      />

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
                  </div>
                </form>
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
