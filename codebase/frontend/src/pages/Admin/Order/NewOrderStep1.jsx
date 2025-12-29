import React, { useState } from 'react';

const NewOrderStep1 = () => {
  const [orderData, setOrderData] = useState({
    customerName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Step 1 submitted:", orderData);

     // ✅ This part is ready
  // TODO: send data to backend or move to next step
  // fetch("/api/orders", { 
  //   method: "POST", 
  //   headers: { "Content-Type": "application/json" }, 
  //   body: JSON.stringify(orderData) 
  // });
    // send to backend or proceed to next step
  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Create a New Order</h2>
          <div className="text">
            Praising pain was born and I will give you a complete account of the system.
          </div>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="customerName"
                        value={orderData.customerName}
                        onChange={handleChange}
                        placeholder="Customer Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value=""/>
                      <button className="theme-btn btn-style-one" type="submit" data-loading-text="Please wait...">
                        <span>Add New Customers</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewOrderStep1;
