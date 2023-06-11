import axios from "axios";
import { useQuery } from "react-query";

import FoodCategoryCard from "./FoodCategoryCard";
import Spinner from "./Spinner";

const getCategories = () => axios.get("http://localhost:5000/api/categories");

function FoodCategoryGridLayout() {
  const { isLoading, data } = useQuery("get categories", getCategories);

  if (isLoading) return <Spinner />;

  return (
    <div className="w-10/12 mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center items-center">
        {!isLoading &&
          data.data.map((category) => (
            <FoodCategoryCard
              key={category.categoryId}
              title={category.mealCategory}
              image={category.categoryThumb}
            />
          ))}
      </div>
    </div>
  );
}

export default FoodCategoryGridLayout;
