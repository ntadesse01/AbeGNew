

// import for context 
import React, { useContext } from "react";
// import { OrderContext } from "../context/OrderContext";

const NewOrderStep3 = () => {
  //using context
  const { orderData } = useContext(OrderContext);

  return (
    <div className="w-full">  
      <div className="sec-title style-two">
        <h2>Admin Dashboard</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="border-2 border-blue-500 bg-gray-100 p-4 w-full"> 
            {/* //ynamic based on context data */}
            <h6 className="text-lg">{orderData.name}</h6>
            <h6 className="text-lg">Email: {orderData.email}</h6>
            <h6 className="text-lg">Phone Number: {orderData.phone}</h6>
            <h6 className="text-lg">Active customer: {orderData.isActive ? "Yes" : "No"}</h6>
            <h6 className="text-lg">Edit customer info:</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderStep3;



// import React from "react";

// const NewOrderStep3 = () => {
//   return (
//     <div className="w-full">  
//       <div className="sec-title style-two">
//         <h2>Admin Dashboard</h2>
//       </div>
//       <div className="row">
//         <div className="col-12">
//           <div className="border-2 border-blue-500 bg-gray-100 p-4 w-full"> 
//             <h6 className="text-lg">Jasmine Albeshir</h6>
//             <h6 className="text-lg">Email: Jalbershir@gmail.com</h6>
//             <h6 className="text-lg">Phone Number: 2345858585</h6>
//             <h6 className="text-lg">Active customer: Yes</h6>
//             <h6 className="text-lg">Edit customer info:</h6>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewOrderStep3;



