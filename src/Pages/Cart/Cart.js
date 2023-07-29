import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";

// user created components go under the comment
import Banner from "../../components/Banner";
import { auth } from "../../firebase/firebase.config";
import Orders from "./Orders";
import OrderSummary from "./OrderSummary";

// React query function
const getOrdersByEmail = async (userEmail) => {
  const response = await axios.get(
    `http://localhost:5000/api/orders?customerEmail=${userEmail}`
  );
  return response.data;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  // Function to update the cart items when a meal is added or removed
  const handleUpdateCart = (updatedCartItems) => {
    setCartItems(updatedCartItems);
  };

  const [user] = useAuthState(auth); // user auth state
  const { email = "" } = user || {};

  const { isLoading, data } = useQuery("get_user_orders_by_email", () =>
    getOrdersByEmail(email)
  );

  return (
    <div>
      <Banner title="Cart" image="https://i.ibb.co/ygJzNNP/background5.jpg" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-start">
        <div className="order-last md:order-first col-span-2">
          <Orders cartItems={cartItems} onUpdateCart={handleUpdateCart} />
        </div>

        <div className="my-4">
          <OrderSummary order={data?.data?.result} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
