import React, { createContext, useEffect, useState } from 'react'
import { Fetcher } from '@aleksasdev/json-api';
import { DATABASE_URL, USERS_ROUTE } from './../constants/general';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

   const [user, setUser] = useState(null);

   const authenticateUser = (userObject) =>{
      setUser({
         userId: userObject.id,
         email: userObject.email,
         avatarUrl: userObject.avatarUrl,
         name: userObject.name,
         rank: userObject.rank
      })
   }

   const handleRememberMe = async () =>{
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");

      if(!email || !password) return;

      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();
      const userDetails = allUsers.find(user => user.email === email);
      if(!userDetails) return;

      authenticateUser(userDetails);
   }

   useEffect(()=>{
      handleRememberMe();
   }, [])

   return (
      <UserContext.Provider value={{
         user, setUser,
         authenticateUser
      }}>
         {children}
      </UserContext.Provider>
   )
}
