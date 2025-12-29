import React from 'react';

const CustomerProfile = () => {
  return (
    <div>
      {/* History Section */}
      <section className="history-section">
        <div className="auto-container">
          <div className="history-block">
            <div className="years">Info</div>
            <div className="content">
              <h4>Customer: Tadesse Solomon</h4>
              <div className="text">
                <h6>Email</h6>
                <h6>Phone Number</h6>
                <h6>Active Customer</h6>
                <h6>Edit Customer Info</h6>
              </div>
            </div>
          </div>
          <div className="history-block">
            <div className="years">Cars</div>
            <div className="content">
              <h4>Vehicles of Tadesse</h4>
              <div className="contact-section">
                <div className="form-column col-lg-7">
                  <div className="inner-column">
                    {/* Contact Form */}
                    <div className="contact-form">
                      <form method="post" action="sendemail.php" id="contact-form">
                        <div className="row clearfix">
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="vehicleYear"
                              placeholder="Vehicle Year"
                              required
                            />
                          </div>

                          {/* Submit Button */}
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
                              <span>Add Vehicle</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Orders Section */}
          <div className="history-block">
            <div className="years">Orders</div>
            <div className="content">
              <h6>Order of Tadesse</h6>
              <div className="text">
                Orders will be displayed here.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerProfile;

// import React, { useState } from 'react';

// const CustomerProfile = ({ customer }) => {
//   // Local state for vehicles
//   const [vehicles, setVehicles] = useState(customer.vehicles || []);
//   const [vehicleYear, setVehicleYear] = useState('');

//   // Handle adding a new vehicle
//   const handleAddVehicle = (e) => {
//     e.preventDefault();
//     if (!vehicleYear.trim()) return;

//     const newVehicle = {
//       id: Date.now(),
//       year: vehicleYear,
//     };

//     setVehicles([...vehicles, newVehicle]);
//     setVehicleYear('');
//   };

//   return (
//     <div>
//       <section className="history-section">
//         <div className="auto-container">

//           {/* Info Block */}
//           <div className="history-block">
//             <div className="years">Info</div>
//             <div className="content">
//               <h4>Customer: {customer.name}</h4>
//               <div className="text">
//                 <h6>Email: {customer.email}</h6>
//                 <h6>Phone: {customer.phone}</h6>
//                 <h6>Active: {customer.isActive ? "Yes ✅" : "No ❌"}</h6>
//                 <h6>
//                   <a href={`/customers/${customer.id}/edit`}>
//                     Edit Customer Info
//                   </a>
//                 </h6>
//               </div>
//             </div>
//           </div>

//           {/* Cars Block */}
//           <div className="history-block">
//             <div className="years">Cars</div>
//             <div className="content">
//               <h4>Vehicles of {customer.name}</h4>
              
//               {/* Existing Vehicles */}
//               {vehicles.length > 0 ? (
//                 <ul>
//                   {vehicles.map((v) => (
//                     <li key={v.id}>🚗 {v.year}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No vehicles yet.</p>
//               )}

//               {/* Add Vehicle Form */}
//               <div className="contact-section">
//                 <div className="form-column col-lg-7">
//                   <div className="inner-column">
//                     <div className="contact-form">
//                       <form onSubmit={handleAddVehicle}>
//                         <div className="row clearfix">
//                           <div className="form-group col-md-12">
//                             <input
//                               type="text"
//                               name="vehicleYear"
//                               placeholder="Vehicle Year"
//                               value={vehicleYear}
//                               onChange={(e) => setVehicleYear(e.target.value)}
//                               required
//                             />
//                           </div>
//                           <div className="form-group col-md-12">
//                             <button className="theme-btn btn-style-one" type="submit">
//                               <span>Add Vehicle</span>
//                             </button>
//                           </div>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Orders Block */}
//           <div className="history-block">
//             <div className="years">Orders</div>
//             <div className="content">
//               <h6>Orders of {customer.name}</h6>
//               <div className="text">
//                 {customer.orders && customer.orders.length > 0 ? (
//                   <ul>
//                     {customer.orders.map((order) => (
//                       <li key={order.id}>
//                         Order #{order.id} – {order.status} – ${order.total}
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p>No orders yet.</p>
//                 )}
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// };

// export default CustomerProfile;
