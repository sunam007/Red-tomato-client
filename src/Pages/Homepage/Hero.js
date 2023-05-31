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
    ></div>
  );
}
//  h-96 md:h-screen flex justify-center md:items-start lg:items-start
//flex justify-center items-center
export default Hero;
