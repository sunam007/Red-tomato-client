import React from "react";

import GridCard from "./GridCard";

const CollapseCard = ({
  title = "Title",
  image = "https://picsum.photos/1200/200",
}) => {
  return (
    <div class="collapse">
      <input type="checkbox" />
      <div class="collapse-title flex justify-center pr-4 relative">
        <img src={image} alt="" className="w-5/6 contrast-50 " />
        <h1 className="absolute bottom-1/4 left-1/4 text-2xl  md:text-5xl  text-white">
          {title}
        </h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 absolute bottom-1/4 right-1/4 text-white opacity-70"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div class="collapse-content flex flex-wrap justify-center">
        <GridCard
          title="Title"
          subTitle="subTitle"
          image="https://picsum.photos/500/300"
        />
        <GridCard
          title="Title"
          subTitle="subTitle"
          image="https://picsum.photos/500/300"
        />
        <GridCard
          title="Title"
          subTitle="subTitle"
          image="https://picsum.photos/500/300"
        />
      </div>
    </div>
  );
};

export default CollapseCard;
