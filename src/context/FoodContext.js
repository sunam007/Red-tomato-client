import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_CART_ORDERS } from "../api/endpoints";

const FoodContext = createContext();

function FoodProvider({ children }) {
  const [meal, setMeal] = useState([]);
  const [itemsInTheCart, setItemsInTheCart] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(API_CART_ORDERS)
  //     .then((res) => setItemsInTheCart(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <FoodContext.Provider
      value={{ meal, setMeal, itemsInTheCart, setItemsInTheCart }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export { FoodProvider };
export default FoodContext;
