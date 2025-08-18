import React, { useState } from 'react';
  const NewOrderStep1 = () => {
    return (
      <div>


<section className="contact-section">
        <div className="auto-container">
            <div className="contact-title">
                <h2>Create a New Order</h2>
                <div className="text">Praising pain was born and I will give you a complete account of the system, and </div>
            </div>
            <div className="row clearfix">
                
                {/* <!--Form Column--> */}
                <div className="form-column col-lg-7">
                    <div className="inner-column">
                        {/* <!--Contact Form--> */}
                        <div className="contact-form">
                            <form method="post" action="sendemail.php" id="contact-form">
                                <div className="row clearfix">
                                    <div className="form-group col-md-12">
                                        <input type="text" name="form_name" value="" placeholder="Your Name" required/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value=""/>
                                        <button className="theme-btn btn-style-one" type="submit" data-loading-text="Please wait..."><span>Add New Customers</span></button>
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
    )
  }
  
  export default NewOrderStep1

 



  