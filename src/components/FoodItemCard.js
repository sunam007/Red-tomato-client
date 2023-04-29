import React from "react";

function FoodItemCard({
  title = "Title",
  subTitle = "Sub Title",
  image = "https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}) {
  return (
    <div className="w-72 bg-white shadow rounded m-1">
      <div
        className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="p-4 flex flex-col items-center">
        <h1 className="text-gray-800 text-center mt-1">{title}</h1>
        <p className="text-gray-400 font-light text-xs text-center">
          {subTitle}
        </p>
        <p className="text-center text-gray-800 mt-1">€1299</p>
        <div className="inline-flex items-center mt-2">
          <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-2 border-r border-gray-200">
            <i className="fa-solid fa-minus" />
          </button>
          <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            2
          </div>
          <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-2 border-r border-gray-200">
            <i className="fa-solid fa-plus " />
          </button>
        </div>
        <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-baseline justify-center">
          Add to cart
          <i className="fa-solid fa-cart-shopping h-6 w-6 ml-2" />
        </button>
      </div>
    </div>
  );
}

export default FoodItemCard;
