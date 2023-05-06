import axios from "axios";
import { createContext, useEffect, useState } from "react";

import { API_CART_ORDERS } from "../api/endpoints";

const CartContext = createContext();

function CartProvider({ children }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(API_CART_ORDERS)
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <CartContext.Provider value={{ orders, setOrders }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
export default CartContext;
