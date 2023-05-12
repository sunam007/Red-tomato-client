import React from "react";
import background from "../../assets/hero.jpg";
import logo from "../../assets/hero/redTomato logo.png";

function HeroTest(props) {
  return (
    <div className="relative">
      {/* Hero background image */}
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="bg-no-repeat bg-cover bg-bottom opacity-50 h-96 md:h-screen"
      >
        {/* Centered logo */}
        <div className="flex justify-center items-center h-full">
          <img className="w-64 md:w-96 " src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default HeroTest;
