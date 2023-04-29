import React from "react";
import GridCard from "./GridCard";

// This component is depricated and replaced by <FoodCategoryGridLayout/>

const MainMenuCard = ({
  title = "Title",
  image = "https://picsum.photos/1200/200",
}) => {
  return (
    <div className="collapse">
      <input type="checkbox" />
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="collapse-title bg-no-repeat bg-cover bg-bottom w-11/12 md:w-9/12 lg:w-9/12 h-24 lg:h-32 mx-auto my-4 flex justify-around items-center"
      >
        <h1 className="text-2xl lg:text-3xl text-gray-100">{title}</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div className=" w-9/12 mx-auto collapse-content flex flex-wrap justify-center items-center">
        <GridCard />
      </div>
    </div>
  );
};

export default MainMenuCard;
