import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewOrderStep2 = () => {
  const [orderData, setOrderData] = useState({
    employeeEmail: "",
  });

  const navigate = useNavigate();

  //  Handle input change
  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  //  Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Step 2 submitted:", orderData);

    //  Save or pass data
    // TODO: send to backend or store in context/state

    //  Move to Step 3
    navigate("/new-order-step3");
  };

  return (
    <div>
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Create a New Order</h2>
            <div className="text">
              Please provide the employee email for this order.
            </div>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-7">
              <div className="inner-column">
                <div className="contact-form">
                  {/* ✅ Controlled React form */}
                  <form onSubmit={handleSubmit} id="order-step2-form">
                    <div className="row clearfix">
                      <div className="form-group col-12">
                        <input
                          style={{ width: "100%" }}
                          type="email"
                          name="employeeEmail"
                          value={orderData.employeeEmail}
                          onChange={handleChange}
                          placeholder="Employee Email"
                          required
                        />
                      </div>

                      <div className="form-group col-12">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                        >
                          Next Step →
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* ✅ End Controlled Form */}
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
