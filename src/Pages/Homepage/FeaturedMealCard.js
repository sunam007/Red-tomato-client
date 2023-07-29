import React, { useState } from "react";
import SubHeaderText from "../../components/SubHeaderText";

const FeaturedMealCard = ({ meal }) => {
  const [quantity, setQuantity] = useState(1);
  const { mealTitle, mealPrice, mealThumb } = meal;

  return (
    <div className="card card-compact w-80 md:w-64 bg-white rounded-md shadow-md">
      <figure>
        <img src={mealThumb} className="w-full h-56" alt="popular food items" />
      </figure>
      <div className="card-body space-y-4">
        <div className="flex flex-col items-center">
          <h2 className="card-title text-center text-gray-900">{mealTitle}</h2>

          <SubHeaderText>$ {mealPrice}</SubHeaderText>
        </div>

        <div className="inline-flex justify-center items-center mt-2">
          <button
            onClick={() => setQuantity(quantity - 1)}
            className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-2 border-r border-gray-200"
          >
            <i className="fa-solid fa-minus" />
          </button>

          <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            {quantity}
          </div>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-2 border-r border-gray-200"
          >
            <i className="fa-solid fa-plus " />
          </button>
        </div>

        <div className="card-actions justify-center">
          <button className="btn btn-block btn-outline btn-accent rounded-md text-gray-900">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMealCard;
