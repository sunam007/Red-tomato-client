import React, { useContext } from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import FoodContext from "../../context/FoodContext";

function Table() {
  const { meal } = useContext(FoodContext);

  return (
    <table className="table w-9/12">
      <TableHeader />
      {meal.map((item) => (
        <TableBody
          key={item.idMeal}
          title={item.strMeal}
          image={item.strMealThumb}
        />
      ))}
      <TableFooter />
    </table>
  );
}

export default Table;
