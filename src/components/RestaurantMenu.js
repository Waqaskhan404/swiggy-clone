import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import  useRestaurant  from '../utils/useRestaurant';

const RestaurantMenu = () => {

    // const [restaurantMenu,setRestaurantMenu]=useState([]);
    const params=useParams();
    const {id}=params;

    const data=useRestaurant(id);

    // console.log(data)




  return (
    <div>RestaurantMenu ID  {id}</div>
  )
}

export default RestaurantMenu;