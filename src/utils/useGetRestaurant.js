import { useEffect, useState } from "react";
import { GET_ALL_RESTAURANT_DATA } from "../constants";

const useGetRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(GET_ALL_RESTAURANT_DATA);
        const json = await data.json();
        const restaurants =
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setAllRestaurants(restaurants);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    }

    fetchData();
  }, []);

  return allRestaurants;
};

export default useGetRestaurant;
