import React from "react";
import background from "../../assets/test/test-2.jpg";
// import logo from "../../assets/hero/redTomato logo rectangular.png";

function Hero({ image = "https://i.ibb.co/tJBbN44/hero-background.png" }) {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="bg-cover bg-no-repeat bg-local bg-center h-screen flex flex-col justify-center items-center "
    >
      {/* <img src={logo} className="w-64 md:w-96 mb-48 md:mb-56 lg:mb-64" alt="" />
      <button className="btn btn-square btn-outline">
        <i className="fa-solid fa-chevron-down font-semibold text-yellow-400 text-2xl"></i>
      </button> */}
    </div>
  );
}
//  h-96 md:h-screen flex justify-center md:items-start lg:items-start
//flex justify-center items-center
export default Hero;
