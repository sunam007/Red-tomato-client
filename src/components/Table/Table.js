import React, { useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import FoodContext from "../../context/FoodContext";
import { auth } from "../../firebase/firebase.config";
import Spinner from "../Spinner";

// must return from the function; the mistake i made again and again is to not return from the function which leads to data value to undefined

function Table() {
  const getOrdersByEmail = async (userEmail) => {
    const response = await axios.get(
      `http://localhost:5000/api/orders/${userEmail}`
    );
    return response.data;
  };

  const [user] = useAuthState(auth); // user auth state

  const { email = "" } = user || {};

  // fetch user specific orders using react query and then show it to Table body

  const { isLoading, data } = useQuery("get_user_orders_by_email", () =>
    getOrdersByEmail(email)
  );
  const date = new Date();

  console.log(date, "isLoading: ", isLoading, "data is: ", data);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <table className="table w-9/12">
        <TableHeader />

        {!isLoading &&
          data?.map((order) => <TableBody key={order.mealId} order={order} />)}

        <TableFooter />
      </table>
    </>
  );
}

export default Table;
