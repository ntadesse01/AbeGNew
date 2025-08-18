import React from 'react';
import TextInput from '../../components/Input/TextInput'; // Ensure the path is correct

const EmployeeEdit = () => {
  return (
    <div className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Edit Employee</h2>
        </div>
        <div className="customer-info">
          <p>Employee Email: mihiretu.tigistu@example.com</p>
        </div>
        {/* Form Column */}
        <div className="form-column col-lg-7">
          <div className="inner-column">
            {/* Contact Form */}
            <div className="contact-form">
              <form method="post" action="sendemail.php" id="contact-form">
                <div className="row clearfix">
                  <TextInput name="email" type="email" placeholder="enter employee email" />
                  <TextInput name="firstName" type="text" placeholder="enter employee first name" />
                  <TextInput name="lastName" type="text" placeholder="enter employee last name" />
                  <TextInput name="phone" type="text" placeholder="enter employee phone" />
                  <div className="form-group col-md-12">
                    <input
                      id="form_botcheck"
                      name="form_botcheck"
                      className="form-control"
                      type="hidden"
                      value=""
                    />
                    {/* Checkbox for Active Employee */}
                    <div>
                      <label>
                        <input type="checkbox" name="isActive" />
                        ✔️ Is Active Employee
                      </label>
                    </div>

                    <button
                      className="theme-btn btn-style-one"
                      type="submit"
                      data-loading-text="Please wait..."
                    >
                      <span>UPDATE</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEdit;
