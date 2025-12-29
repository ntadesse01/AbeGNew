import React, { useState } from 'react';
import TextInput from '../../components/Input/TextInput';

const CustomerEdit = () => {
  const [customer, setCustomer] = useState({
    email: "mihiretu.tigistu@example.com",
    firstName: "",
    lastName: "",
    phone: "",
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated customer data:", customer);

    //  Save or pass data
    // TODO: send to backend or update context/global state
    // fetch("/api/customers", {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(customer),
    // });
  };

  return (
    <div className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Edit Customer</h2>
        </div>
        <div className="customer-info">
          <p>Customer Email: {customer.email}</p>
        </div>

        <div className="form-column col-lg-7">
          <div className="inner-column">
            <div className="contact-form">
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="row clearfix">
                  <TextInput
                    name="email"
                    type="email"
                    value={customer.email}
                    onChange={handleChange}
                    placeholder="Enter customer email"
                  />
                  <TextInput
                    name="firstName"
                    type="text"
                    value={customer.firstName}
                    onChange={handleChange}
                    placeholder="Enter customer first name"
                  />
                  <TextInput
                    name="lastName"
                    type="text"
                    value={customer.lastName}
                    onChange={handleChange}
                    placeholder="Enter customer last name"
                  />
                  <TextInput
                    name="phone"
                    type="text"
                    value={customer.phone}
                    onChange={handleChange}
                    placeholder="Enter customer phone"
                  />

                  <div className="form-group col-md-12">
                    <label>
                      <input
                        type="checkbox"
                        name="isActive"
                        checked={customer.isActive}
                        onChange={handleChange}
                      />
                      ✔️ Is Active Customer
                    </label>
                  </div>

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
