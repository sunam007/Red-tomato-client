import React from "react";

import Banner from "../../components/Banner";
import CategoryGridLayout from "../../components/CategoryGridLayout";

const Menu = () => {
  return (
    <div className="bg-white">
      <Banner title="MENU" image="https://i.ibb.co/ygJzNNP/background5.jpg" />
      <CategoryGridLayout />
    </div>
  );
};

export default Menu;
