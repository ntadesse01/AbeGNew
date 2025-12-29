import React, {useState} from 'react'

// Placeholder is fine
// I was told to finish state, update state, and handle it with handleSubmit

const AddCustomer = () => {
  const [customerData, setCustomerData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer submitted:", customerData);

    // Example: send to backend
    // fetch("/api/customers", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(customerData),
    // });
  };
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
            {/* //ontrolled with React state and handled submission with handleSubmit. */} 
            {/* traditional HTML form submission to react controlled form submission. */}

            <form onSubmit={handleSubmit} id="contact-form">
              <div className="row clearfix">
                <div className="form-group col-md-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Customer Email"
                    value={customerData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Customer First Name"
                    value={customerData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Customer Last Name"
                    value={customerData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={customerData.phone}
                    onChange={handleChange}
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