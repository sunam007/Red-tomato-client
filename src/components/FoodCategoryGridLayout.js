import React, { useEffect, useState } from "react";
import axios from "axios";

import FoodCategoryCard from "./FoodCategoryCard";

function FoodCategoryGridLayout(props) {
  const [categories, setCategories] = useState([]);
  // console.log(categories);

  const baseUrl = "https://www.themealdb.com/api/json/v1/1"; // the meal db api base url
  

  useEffect(() => {
    axios
      .get(`${baseUrl}/categories.php`) // meal db complete url
      .then((response) => setCategories(response.data.categories))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-10/12 mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center items-center">
        {categories.map((category) => (
          <FoodCategoryCard
            key={category.idCategory}
            title={category.strCategory}
            image={category.strCategoryThumb}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodCategoryGridLayout;
