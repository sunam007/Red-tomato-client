import axios from "axios";
import { createContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";

import { auth } from "../firebase/firebase.config";

const FoodContext = createContext();

function FoodProvider({ children }) {
  const [meal, setMeal] = useState([]);

  const [itemsInTheCart, setItemsInTheCart] = useState([]);

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
