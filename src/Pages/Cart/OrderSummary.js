import React from "react";

const OrderSummary = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="card w-96 bg-white text-black rounded-md shadow-md">
      <div className="card-body">
        <h2 className="card-title">Payment Summary</h2>
        <hr />
        <div className="space-y-4">
          <p>Sub Total: $ 120</p>
          <p>Delivery charge: $ 10</p>
        </div>
        <hr />
        <p>Total Pay: $130</p>
        <div className="card-actions justify-center mt-2">
          <button className="btn btn-block rounded-md">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
