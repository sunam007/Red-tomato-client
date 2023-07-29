import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

import background from "../../assets/background6.jpg";
import HeaderText from "../../components/HeaderText";
import FeaturedMealCard from "./FeaturedMealCard";

const getPopularMeals = () =>
  axios.get("http://localhost:5000/api/meals/?mealTags=popular");

const FeaturedMeal = () => {
  const { isLoading, data } = useQuery("get-popular-meals", getPopularMeals);
  const popularMealArr = data?.data?.data;

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="bg-no-repeat bg-cover bg-bottom"
    >
      <div className="space-y-12 py-12 ">
        <HeaderText title="Popular Meals" textColor="text-gray-100" />

        <div className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-start lg:justify-center gap-4 ">
          {popularMealArr?.map((meal) => (
            <FeaturedMealCard key={meal._id} meal={meal} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/menu">
            <button className="btn btn-wide border-none rounded-md  text-gray-500 bg-yellow-100  hover:bg-emerald-500">
              View Full Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

//className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center"

export default FeaturedMeal;
