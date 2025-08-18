import React from 'react';
import TextInput from '../../components/Input/TextInput';
 

const CustomerEdit = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Edit Customer</h2>
        </div>
        <div className="customer-info">
          <p>Customer Email: mihiretu.tigistu@example.com</p>
        </div>

        {/* Form Column */}
        <div className="form-column col-lg-7">
          <div className="inner-column">
            {/* Contact Form */}
            <div className="contact-form">
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="row clearfix">
                  <TextInput name="email" type="email" placeholder="Enter customer email" />
                  <TextInput name="firstName" type="text" placeholder="Enter customer first name" />
                  <TextInput name="lastName" type="text" placeholder="Enter customer last name" />
                  <TextInput name="phone" type="text" placeholder="Enter customer phone" />

                  {/* Hidden botcheck input (if needed) */}
                  <input type="hidden" name="form_botcheck" value="" />

                  {/* Checkbox */}
                  <div className="form-group col-md-12">
                    <label>
                      <input type="checkbox" name="isActive" />
                      ✔️ Is Active Customer
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="form-group col-md-12">
                    <button className="theme-btn btn-style-one" type="submit">
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

export default CustomerEdit;
