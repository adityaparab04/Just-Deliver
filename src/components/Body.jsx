import RestaurantCard from "./RestaurantCard";
import resDataList from "../utils/data";
import SEARCH from "../utils/constants";

const Body = () => {
  return (
    <div className="body">
      <div className="search">{SEARCH}</div>
      <div className="restaurant-card-container">
        {resDataList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
