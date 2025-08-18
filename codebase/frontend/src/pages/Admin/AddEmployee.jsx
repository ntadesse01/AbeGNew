import React from "react";
import TextInput from "../../components/Input/TextInput";

const AddEmployee = () => {
  return (
    <div className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add new Employee</h2>
        </div>
      </div>

      {/* <!--Form Column--> */}
      <div className="form-column col-lg-7">
        <div className="inner-column">
          {/* <!--Contact Form--> */}
          <div className="contact-form">
            <form method="post" action="sendemail.php" id="contact-form">
              <div className="row clearfix">


              <TextInput name={"email"} type={"email"} placeholder={"enter employee email"}/>

              <TextInput name={"firstName"} type={"text"} placeholder={"enter employee firstName"}/>

              <TextInput name={"lastName"} type={"text"} placeholder={"enter employee lastName"}/>


                <div className="form-group col-md-12">
                  <input
                    type="email"
                    name="email"
                    value=""
                    placeholder="Employee Email"
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="firstName"
                    value=""
                    placeholder="Employee FirstName"
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="lastName"
                    value=""
                    placeholder="Employee lastName"
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="phone"
                    value=""
                    placeholder="Phone"
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  
                    <select className="" name="make">
                      <option value="*">Make</option>
                      <option value=".category-1">Hyundai</option>
                      <option value=".category-3">Jeep</option>
                      <option value=".category-4">Toyota</option>
                    </select>
                   
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="password"
                    value=""
                    placeholder="Password"
                    required
                  />
                </div>

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
                    data-loading-text="Please wait...">
                    <span>Add Employee</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
