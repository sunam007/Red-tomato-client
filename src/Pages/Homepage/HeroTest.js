import React from "react";
import logo from "../../assets/hero/redTomato logo rectangular.png";

const HeroTest = () => {
  return (
    <div
      className="hero h-96 md:h-112"
      style={{
        backgroundImage: `url("https://i.ibb.co/W6z49Yx/background.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="max-w-md">
          <img src={logo} alt="" className="w-56 md:w-64 lg:w-80" />
        </div>
      </div>
    </div>
  );
};

export default HeroTest;
