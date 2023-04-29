import React from "react";

import Banner from "../../components/Banner";
import FoodCategoryGridLayout from "../../components/FoodCategoryGridLayout";

const Menu = () => {
  return (
    <div className="bg-white">
      <Banner title="MENU" image="https://i.ibb.co/ygJzNNP/background5.jpg" />
      <FoodCategoryGridLayout />
    </div>
  );
};

export default Menu;
