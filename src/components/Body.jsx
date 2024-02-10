import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SEARCH from "../utils/constants";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistOfRes(
      json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(listOfRes);
  };

  return (
    <div className="body">
      <div className="search">{SEARCH}</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRes(listOfRes);
          }}
        >
          Show All
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRes(
              listOfRes.filter((res) => {
                return res.info.avgRating >= 4;
              })
            );
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="restaurant-card-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
