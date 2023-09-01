import { useEffect, useState } from "react";
// import { dataList } from "../constants";
import RestaurantCard from "./ResturentCardData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from '../utils/Helper';
import { GET_ALL_RESTAURANT_DATA } from "../constants";


const Body = () => {
    const [searchTxt,setSearchTxt]=useState("");
    const [filterItem,setFilterItem]=useState([]);
    const [allRestaurants,setAllRestaurants]=useState([]);
    useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      GET_ALL_RESTAURANT_DATA
    );
    const json = await data.json();
    // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterItem(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  // Not Render Component Early
  if(!allRestaurants) return null;


    return allRestaurants?.length===0 ? <Shimmer/> :
    (

     <>
    <div className="search-container">
        <input type="text" placeholder="Search" value={searchTxt} onChange={(e)=>setSearchTxt(e.target.value)}/>
    <button onClick={()=>{
    const data=filterData(searchTxt,allRestaurants)
    setFilterItem(data)
    }
    }>Search</button>
    </div>

    <div className="card-main">  
    {
    filterItem?.length===0 ?  <h1>No Restaurant found</h1> :
      filterItem?.map((restaurant,index)=>{
        // console.log(restaurant.info)
        return <Link to={"/restaurantmenu/"+restaurant.info.id} key={index}><RestaurantCard {...restaurant?.info}  /></Link>
        // return <RestaurantCard {...restaurant?.info}key={index}  />

      })
    }
  
  
    {/* <RestaurantCard data={...dataList[1]}/>
    <RestaurantCard data={...dataList[2]}/>
    <RestaurantCard data={...dataList[3]}/>
    <RestaurantCard data={...dataList[4]}/>
    <RestaurantCard data={...dataList[5]}/>
    <RestaurantCard data={...dataList[6]}/> */}
    </div>
    
    </>
    );
  };

  export default Body;