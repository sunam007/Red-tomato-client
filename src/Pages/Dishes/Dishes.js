import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import Banner from "../../components/Banner";
import FoodItemCard from "../../components/FoodItemCard";

function Dishes() {
  const { foodCategory } = useParams();

  const { isLoading, data } = useQuery("get meals by category", () => {
    return axios.get(`http://localhost:5000/api/filter/${foodCategory}`);
  });

  if (isLoading) return <h2 className="text-2xl">Loading ... </h2>;

  return (
    <div>
      <Banner title={`${foodCategory}`} />

      <div className="w-10/12 mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center items-center">
        {!isLoading &&
          data?.data.map((meal) => (
            <FoodItemCard key={meal.mealId} meal={meal} />
          ))}
      </div>
    </div>
  );
}

export default Dishes;
