import Banner from "../../components/Banner";
import FoodCategoryGridLayout from "../../components/FoodCategoryGridLayout";

const Menu = () => {
  return (
    <div className="bg-white">
      <Banner title="MENU" />
      <FoodCategoryGridLayout />
    </div>
  );
};

export default Menu;
