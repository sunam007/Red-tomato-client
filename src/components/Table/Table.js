import React, { useContext } from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import CartContext from "../../context/CartContext";

function Table() {
  const { orders } = useContext(CartContext);

  return (
    <table className="table w-9/12">
      <TableHeader />
      {orders ? (
        orders.map((item) => (
          <TableBody
            key={item.idMeal}
            title={item.strMeal}
            image={item.strMealThumb}
            price={item.strPrice}
            quantity={item.strQuantity}
          />
        ))
      ) : (
        <div>"No items in the cart"</div>
      )}
      <TableFooter />
    </table>
  );
}

export default Table;
