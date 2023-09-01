import { useEffect, useState } from "react";
import { FETCH_MENU_Data_URL } from "../constants";

 const useRestaurant=(id)=>{
    const [restaurant,setRestaurant]=useState(null);

    useEffect(()=>{
        getAllRestaurantData();
    },[]);

    async function getAllRestaurantData(){
        const response=await fetch(FETCH_MENU_Data_URL+id)
        const data=await response.json();
        setRestaurant(data?.data);

    }
    return restaurant;

}
export default useRestaurant;