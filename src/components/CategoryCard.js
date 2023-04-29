import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({
  title = "Title",
  subTitle,
  image = "https://picsum.photos/id/223/400",
}) {
  return (
    <Link to="/cart">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-64 w-64 bg-no-repeat object-fill transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 flex justify-center items-end"
      >
        <h1 class="text-3xl font-normal text-gray-900 pb-4">{title}</h1>
      </div>
    </Link>
  );
}

export default CategoryCard;
