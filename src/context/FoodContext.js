import { createContext, useState } from "react";

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
