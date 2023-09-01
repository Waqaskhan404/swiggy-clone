import { useEffect, useState } from "react";
import { GET_ALL_RESTAURANT_DATA } from "../constants";
const useGetRestaurant=()=>{
    const [getData,setGetData]=useState([]);

    useEffect(() => {
        getRestaurants();
      }, []);
    
      async function getRestaurants() {
        const data = await fetch(
          GET_ALL_RESTAURANT_DATA
        );
        const json = await data.json();
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setGetData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
      return getData;
}

export default useGetRestaurant;