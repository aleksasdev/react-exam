import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '@/contexts/UserProvider';

export const Logout = () => {

   const { setUser } = useContext(UserContext);
   const navigator = useNavigate();

   const handleLogout = () =>{
      localStorage.clear();
      setUser(null);
      navigator("/login");
   }

   useEffect(()=>{
      handleLogout();
   }, [])

   return (
      <></>
   )
}
