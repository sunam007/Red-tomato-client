import React from "react";
import background from "../assets/background5.jpg";

function Banner({ title = "Title", subTitle = "lorem ipsum dolor set" }) {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-bottom text-right h-48 md:h-96 flex flex-col items-center justify-center "
    >
      <h1 className="text-2xl md:text-5xl text-white">{title}</h1>
      <p className="text-lg md:text-xl text-gray-300">{subTitle}</p>
    </div>
  );
}

export default Banner;
