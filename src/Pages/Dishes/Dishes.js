import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Banner from "../../components/Banner";
import FoodItemCard from "../../components/FoodItemCard";

function Dishes() {
  const [meals, setMeals] = useState([]);

  const { foodCategory } = useParams();
  // console.log(foodCategory);

  const baseUrl = "https://www.themealdb.com/api/json/v1/1"; // the-meal-db api base url

  useEffect(() => {
    axios
      .get(`${baseUrl}/filter.php?c=${foodCategory}`) // the-meal-db api complete url
      .then((response) => setMeals(response.data.meals))
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Banner
        title={`${foodCategory}`}
        image="https://i.ibb.co/ygJzNNP/background5.jpg"
      />

      <div className="w-10/12 mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center items-center">
        {meals.map((meal) => (
          <FoodItemCard
            key={meal.idMeal}
            title={meal.strMeal}
            image={meal.strMealThumb}
            idMeal={meal.idMeal}
          />
        ))}
      </div>
    </div>
  );
}

export default Dishes;
