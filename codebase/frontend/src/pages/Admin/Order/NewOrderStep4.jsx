import React, { useContext } from "react";
// import { OrderContext } from "../context/OrderContext";

const NewOrderStep4 = () => {
  const { orderData } = useContext(OrderContext);

  const handleSubmitOrder = () => {
    console.log("Final order submitted:", orderData);

    //  Save to backend
    // fetch("/api/orders", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(orderData),
    // });

    alert("Order submitted successfully!");
  };

  return (
    <div className="w-full">
      <div className="sec-title style-two">
        <h2>Review & Confirm Order</h2>
      </div>

      <div className="border-2 border-green-500 bg-gray-100 p-4 w-full">
        <h6 className="text-lg">Customer: {orderData.name}</h6>
        <h6 className="text-lg">Email: {orderData.email}</h6>
        <h6 className="text-lg">Phone: {orderData.phone}</h6>
        <h6 className="text-lg">
          Active customer: {orderData.isActive ? "Yes" : "No"}
        </h6>
      </div>

      <button
        onClick={handleSubmitOrder}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Submit Order
      </button>
    </div>
  );
};

export default NewOrderStep4;
