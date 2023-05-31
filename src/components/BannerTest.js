import React from "react";

function BannerTest({ title, subTitle }) {
  return (
    <div
      className="hero h-64 md:h-72 lg:h-72 xl:h-96 "
      style={{
        backgroundImage: `url("https://i.ibb.co/wpfdjLJ/banner-cropped.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-100">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-400">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default BannerTest;
