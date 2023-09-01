// import { cardCdn } from "../constants";


// const RestaurantCard=({data})=>{ //Second Method

//     // console.log(data)

//     // const {imageId,text,altTextCta}=data
//     return(
//         <>
//         {/* <div className="card">
//             <img src={cardCdn+props.data.imageId} alt="food-image"/>
//             <h1>{props.data.action.text}</h1>
//             <button>{props.data.accessibility.altTextCta}</button>
//         </div> */}
//            <div className="card">
//             <img src={cardCdn+data.imageId} alt="food-image"/>
//             <h1>{data.action.text}</h1>
//             <button>{data.accessibility.altTextCta}</button>
//         </div>
//         </>

//     );
// }

// export default RestaurantCard;

const RestaurantCardData = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    return (
      <div>
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };

  export default RestaurantCardData;