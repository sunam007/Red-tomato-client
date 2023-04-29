import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

function CategoryGridLayout(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);
  return (
    <div className="w-10/12 mx-auto py-6">
      <div className="grid grid-cols-4 gap-6 justify-items-center items-center">
        {categories.map((category) => (
          <CategoryCard
            key={category.idCategory}
            title={category.strCategory}
            image={category.strCategoryThumb}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryGridLayout;
