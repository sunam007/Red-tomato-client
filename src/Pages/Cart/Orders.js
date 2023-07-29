import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";

import { auth } from "../../firebase/firebase.config";
import Order from "./Order";
import Spinner from "../../components/Spinner";

const getOrdersByEmail = async (userEmail) => {
  const response = await axios.get(
    `http://localhost:5000/api/orders?customerEmail=${userEmail}`
  );
  return response.data;
};

const Orders = ({ cartItems, onUpdateCart }) => {
  const [user] = useAuthState(auth); // user auth state
  const { email = "" } = user || {};

  const { isLoading, data } = useQuery("get_user_orders_by_email", () =>
    getOrdersByEmail(email)
  );

  const handleDeleteItemFromCart = async (_id) => {
    const proceedDeletion = window.confirm("Do you want to delete this item?");

    try {
      if (!proceedDeletion) return;

      if (proceedDeletion) {
        const response = await axios.delete(
          `http://localhost:5000/api/orders/${_id}`
        );

        console.log(response);

        if (response.status === 204) {
          return toast.success("Item has been deleted");
          // Filter out the deleted item from cartItems
          // const updatedCartItems = cartItems.filter((item) => item._id !== _id);
          // const updatedCartItems = cartItems.filter((item) =>
          //   console.log(item)
          // );
          // console.log(updatedCartItems);
          // Call the onUpdateCart function to update the cart in the parent component
          // onUpdateCart(updatedCartItems);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  return (
    <div className="md:my-4 space-y-4">
      {!isLoading &&
        data?.data?.result.map((order) => (
          <Order
            key={order.mealId}
            order={order}
            handleDeleteItemFromCart={handleDeleteItemFromCart}
          />
        ))}
    </div>
  );
};

export default Orders;
