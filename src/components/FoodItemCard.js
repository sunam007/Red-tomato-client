import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { API_CART_ORDERS, API_LOOK_UP_BY_MEAL_ID } from "../api/endpoints";
import "./FoodItemCard.css";
import FoodContext from "../context/FoodContext";

function FoodItemCard({ meal }) {
  const [quantity, setQuantity] = useState(1);

  const { mealTitle: title, mealPrice: price, mealThumb: image } = meal;

  const navigate = useNavigate();

  const { setItemsInTheCart } = useContext(FoodContext);

  //event handler

  const handleAddToCart = (mealId) => {
    axios
      .get(`http://localhost:5000/api/meals/${mealId}`)
      .then((res) => setItemsInTheCart(res.data));
  };

  return (
    <div className="w-64  overflow-hidden bg-white shadow rounded">
      <div
        className="h-48 w-full card-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div
        className="pt-2 flex flex-col items-center tooltip"
        data-tip={`${title}`}
      >
        <h1 className="text-gray-800 text-center mt-1 truncate">{title}</h1>

        <p className="text-center text-gray-800 mt-1">${price}</p>

        <div className="inline-flex items-center mt-2">
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

        <Link>
          <button
            onClick={() => handleAddToCart(meal.mealId)} // Add items to the cart //
            className="py-2 px-4 mb bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 my-4 w-full flex items-baseline justify-center"
          >
            Add to cart
            <i className="fa-solid fa-cart-shopping icon-spacing" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FoodItemCard;
