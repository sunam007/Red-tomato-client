import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";

import FoodItemCard from "../../components/FoodItemCard";

const Cart = () => {
 
  return (
    <div>
      <Banner title=""/>
      <FoodItemCard />
    </div>
  );
};

export default Cart;
