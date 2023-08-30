import { useEffect, useState } from "react";
// import { dataList } from "../constants";
import RestaurantCard from "./ResturentCardData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [searchTxt,setSearchTxt]=useState("");
    const [filterItem,setFilterItem]=useState([]);
    const [allRestaurants,setAllRestaurants]=useState([]);

     function filterData(searchText, allRestaurants) {
      const filterData = allRestaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
      );
    
      return filterData;
    }

    useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5270362&lng=77.13593279999999&page_type=DESKTOP_WEB_LISTING"
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