import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resDataList from "../utils/data";
import SEARCH from "../utils/constants";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState(resDataList);
  return (
    <div className="body">
      <div className="search">{SEARCH}</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRes(resDataList);
          }}
        >
          Show All
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRes(
              resDataList.filter((res) => {
                return Number(res.data.avgRating) > 4;
              })
            );
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="restaurant-card-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
