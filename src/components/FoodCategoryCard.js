import React from "react";
import { Link } from "react-router-dom";

function FoodCategoryCard({
  title = "Title",
  subTitle,
  image = "https://picsum.photos/id/223/400",
}) {
  return (
    <Link to={`/dish/${title}`}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-64 w-64 bg-no-repeat object-fill transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 flex justify-center items-end"
      >
        <h1 className="text-2xl lg:text-3xl font-normal text-gray-900 pb-4">
          {title}
        </h1>
      </div>
    </Link>
  );
}

export default FoodCategoryCard;
