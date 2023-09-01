import React, { useEffect, useState } from 'react'

const useIsOnline = () => {
    const [isOnline,setIsOnline]=useState(true);

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsOnline(true);
        });
        window.addEventListener("offline",()=>{
            setIsOnline(false);
        })


    },[])

    return isOnline
  
}

export default useIsOnline