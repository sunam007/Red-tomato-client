import React from "react";
import Banner from "../../components/Banner";
import MainMenuCard from "../../components/MainMenuCard";

const Menu = () => {
  return (
    <div className="bg-white">
      <Banner title="MENU" image="https://i.ibb.co/ygJzNNP/background5.jpg" />
      <MainMenuCard />
      <MainMenuCard />
      <MainMenuCard />
      <MainMenuCard />
    </div>
  );
};

export default Menu;
