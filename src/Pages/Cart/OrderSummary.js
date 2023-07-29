import React from "react";

const OrderSummary = ({ order }) => {
  // Calculate the subtotal
  const subtotal = order?.reduce(
    (acc, item) => acc + item.mealPrice * item.mealQuantity,
    0
  );

  // Calculate the total pay (subtotal + delivery charge, assuming delivery charge is $10)
  const totalPay = subtotal ? subtotal + 10 : 0;

  return (
    <div className="card w-96 bg-white text-black rounded-md shadow-md">
      <div className="card-body">
        <h2 className="card-title">Payment Summary</h2>
        <hr />
        <div className="space-y-4">
          <p>Sub Total: $ {subtotal}</p>
          <p>Delivery charge: $ 10</p>
        </div>
        <hr />
        <p>Total Pay: $ {totalPay}</p>
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
