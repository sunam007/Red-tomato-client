import React from "react";
import Slider from "react-slick";

function FoodSlider({
  title = "Title",
  subTitle,
  image = "https://picsum.photos/id/223/400",
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-screen">
      <Slider>
        <div className="w-10">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="h-64 w-64 bg-no-repeat object-fill transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 flex justify-center items-end"
          >
            <h1 className="text-2xl lg:text-3xl font-normal text-gray-900 pb-4">
              {title}
            </h1>
          </div>
        </div>
        <div className="w-10">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="h-64 w-64 bg-no-repeat object-fill transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 flex justify-center items-end"
          >
            <h1 className="text-2xl lg:text-3xl font-normal text-gray-900 pb-4">
              {title}
            </h1>
          </div>
        </div>
        <div className="w-10">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="h-64 w-64 bg-no-repeat object-fill transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 flex justify-center items-end"
          >
            <h1 className="text-2xl lg:text-3xl font-normal text-gray-900 pb-4">
              {title}
            </h1>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default FoodSlider;
