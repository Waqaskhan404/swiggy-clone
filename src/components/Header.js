import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin,setIsLogin]=useState(false);
    return (
      <>
      <div className="header-main">
        <div className="logo-container">
          <img className="logo" alt="logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?size=626&ext=jpg&ga=GA1.2.130476713.1693147265&semt=ais" />
        </div>
        <div className="nav-element-main">
          <ul className="nav-element-ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
          </ul>
        </div>
        <div>
          {
          
          isLogin ? <button onClick={(e)=>setIsLogin(false)}>Logout</button> : <button onClick={(e)=>setIsLogin(true)}>Login</button>
          }
          
        </div>
        </div>
      </>
    );
  };
  export default Header;