import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin,setIsLogin]=useState(false);
    return (
      <>
      <div className="flex justify-between h-16 bg-pink-400 items-center text-[#ffff] px-9 shadow-md">
        <div>
          <img className="h-14" alt="logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?size=626&ext=jpg&ga=GA1.2.130476713.1693147265&semt=ais" />
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
          </ul>
        </div>
        <div>
          {
          
          isLogin ? <button className="rounded-md p-2 bg-purple-600" onClick={(e)=>setIsLogin(false)}>Logout</button> : <button className="rounded-md px-6 py-2 bg-purple-600" onClick={(e)=>setIsLogin(true)}>Login</button>
          }
          
        </div>
        </div>
      </>
    );
  };
  export default Header;