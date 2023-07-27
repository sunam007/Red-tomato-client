import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./FoodItemCard.css";
import { UserContext } from "../context/UserContext";
import { validateOrder } from "../utils/validation/order.schema";

function FoodItemCard({ meal }) {
  const [orderedMeal, setOrderedMeal] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const { mealId, mealTitle: title, mealPrice: price, mealThumb: image } = meal;

  const { user } = useContext(UserContext); // get user states

  const { email = "" } = user || {}; //logged in user properties

  const navigate = useNavigate();

  //--------- Event Handler -------------//

  const handleAddToCart = async (mealId) => {
    try {
      if (!user) {
        alert("Login First");
        navigate("/login");
        return;
      }

      const res = await axios.get(`http://localhost:5000/api/meals/${mealId}`);

      const order = {
        ...res.data[0],
        _id: null,
        mealQuantity: quantity,
        customerEmail: email,
      };

      const { value, error } = validateOrder(order);

      if (error) return console.log(error);

      const response = await axios.post(
        `http://localhost:5000/api/orders`,
        order
      );

      navigate("/cart");
    } catch (error) {
      console.error("Error from FoodItemCard: ", error);
    }
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

        <div>
          <button
            onClick={() => handleAddToCart(mealId)} // Add items to the cart //
            className="py-2 px-4 mb bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 my-4 w-full flex items-baseline justify-center"
          >
            Add to cart
            <i className="fa-solid fa-cart-shopping icon-spacing" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodItemCard;
