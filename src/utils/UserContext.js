import { createContext } from "react";

const UserContext=createContext({
    user:{
        name:"Dummy Value",
        email:"DummyEmail@gmail.com"
    }});



export default UserContext;