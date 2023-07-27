import axios from "axios";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

import { auth } from "../../firebase/firebase.config";
import Spinner from "../Spinner";

// must return from the function; the mistake i made again and again is to not return from the function which leads to data value to undefined

function Table() {
  const getOrdersByEmail = async (userEmail) => {
    const response = await axios.get(
      `http://localhost:5000/api/orders?customerEmail=${userEmail}`
    );
    return response.data;
  };

  const [user] = useAuthState(auth); // user auth state

  const { email = "" } = user || {};

  const { isLoading, data } = useQuery("get_user_orders_by_email", () =>
    getOrdersByEmail(email)
  );

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <table className="table w-9/12">
        <TableHeader />

        {!isLoading &&
          data?.data?.result.map((order) => (
            <TableBody key={order.mealId} order={order} />
          ))}

        <TableFooter />
      </table>
    </>
  );
}

export default Table;
