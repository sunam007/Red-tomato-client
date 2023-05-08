import React, { useContext } from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import FoodContext from "../../context/FoodContext";

function Table() {
  const { itemsInTheCart } = useContext(FoodContext);

  return (
    <table className="table w-9/12">
      <TableHeader />
      {itemsInTheCart ? (
        itemsInTheCart.map((item) => (
          <TableBody
            key={item._id}
            title={item.strMeal}
            image={item.strMealThumb}
            price={item.strPrice}
            quantity={item.strQuantity}
          />
        ))
      ) : (
        <h1>"No items in the cart"</h1>
      )}
      <TableFooter />
    </table>
  );
}

export default Table;
