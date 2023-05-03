import React, { useState } from "react";
import { Link } from "react-router-dom";

function FoodItemCard({
  title = "Title",
  subTitle = "Sub Title",
  price = 9.99,
  image = "https://picsum.photos/1200",
  idMeal,
}) {
  const [amount, setAmount] = useState(1);
  // const [isDisabled, setIsDisabled] = useState(false);

  const handleAddToCart = (mealId) => {
    console.log(" Meal Clicked >> ", mealId);
  };

  return (
    <div className="w-72 overflow-hidden bg-white shadow rounded">
      <div
        className="h-64 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div
        className="p-4 flex flex-col items-center tooltip"
        data-tip={`${title}`}
      >
        <h1 className="text-gray-800 text-center mt-1 truncate">{title}</h1>

        <p className="text-gray-400 font-light text-xs text-center">
          {subTitle}
        </p>

        <p className="text-center text-gray-800 mt-1">${price}</p>

        <div className="inline-flex items-center mt-2">
          <button
            onClick={() => setAmount(amount - 1)}
            className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-2 border-r border-gray-200"
          >
            <i className="fa-solid fa-minus" />
          </button>

          <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            {amount}
          </div>

          <button
            onClick={() => setAmount(amount + 1)}
            className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-2 border-r border-gray-200"
          >
            <i className="fa-solid fa-plus " />
          </button>
        </div>

        <Link to={`/cart/${idMeal}`}>
          <button
            onClick={() => handleAddToCart(idMeal)} // Add items to the cart //
            className="py-2 px-4 mb bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 my-4 w-full flex items-baseline justify-center"
          >
            Add to cart
            <i className="fa-solid fa-cart-shopping h-6 w-6 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FoodItemCard;
