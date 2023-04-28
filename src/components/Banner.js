import React from "react";

function Banner({
  title = "Title",
  subTitle,
  image = "https://picsum.photos/1400",
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="bg-no-repeat bg-cover bg-bottom  h-24 sm:h-32 md:h-48 lg:h-64 xl:h-96 flex flex-col items-center justify-center "
    >
      <h1 className="text-2xl md:text-5xl text-gray-100">{title}</h1>
      <p className="text-lg md:text-xl text-gray-400">{subTitle}</p>
    </div>
  );
}

export default Banner;
