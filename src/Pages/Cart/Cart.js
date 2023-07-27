import React, { useState } from "react";

// user created components go under the comment
import Banner from "../../components/Banner";
import Orders from "./Orders";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to update the cart items when a meal is added or removed
  const handleUpdateCart = (updatedCartItems) => {
    setCartItems(updatedCartItems);
  };
  return (
    <div>
      <Banner title="Cart" image="https://i.ibb.co/ygJzNNP/background5.jpg" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-start">
        <div className="order-last md:order-first col-span-2">
          <Orders cartItems={cartItems} onUpdateCart={handleUpdateCart} />
        </div>

        <div className="my-4">
          <OrderSummary cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
