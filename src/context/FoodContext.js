import { createContext, useState } from "react";

const FoodContext = createContext();

function FoodProvider({ children }) {
  const [meal, setMeal] = useState([]);
  return (
    <FoodContext.Provider value={{ meal, setMeal }}>
      {children}
    </FoodContext.Provider>
  );
}

export { FoodProvider };
export default FoodContext;
