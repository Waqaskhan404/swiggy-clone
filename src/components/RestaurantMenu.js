import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {

    const [restaurantMenu,setRestaurantMenu]=useState([]);
    const params=useParams();
    const {id}=params;

    useEffect(()=>{
        getAllRestaurantData();
    },[]);

    async function getAllRestaurantData(){
        const response=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+id)
        const data=await response.json();
        console.log(data?.data);

    }




  return (
    <div>RestaurantMenu  {id}</div>
  )
}

export default RestaurantMenu;