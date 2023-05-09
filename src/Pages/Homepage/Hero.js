import React from "react";
import background from "../../assets/hero.png";

function Hero({ image = "https://i.ibb.co/tJBbN44/hero-background.png" }) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="bg-no-repeat bg-cover bg-bottom h-96 md:h-screen"
      ></div>
    </div>
  );
}

export default Hero;
