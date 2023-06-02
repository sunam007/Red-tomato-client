import React from "react";
import { Link } from "react-router-dom";

function FoodCategoryCard({
  title = "Title",
  image = "https://picsum.photos/id/223/400",
}) {
  return (
    <Link to={`/dish/${title}`}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-64 w-64 bg-no-repeat bg-cover bg-bottom transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
      >
        <div className="hero-overlay bg-opacity-70 flex justify-center items-center">
          <h1 className="text-2xl text-center text-gray-50">{title}</h1>
        </div>
      </div>
    </Link>
  );
}

export default FoodCategoryCard;
