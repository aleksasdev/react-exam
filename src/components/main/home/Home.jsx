import React, { useContext } from 'react'
import { UserContext } from './../../../contexts/UserProvider';

export const Home = () => {

   const { user } = useContext(UserContext);

   return (
      <section id="home">
         {user
         ?
            null
         :
            <p>Please login.</p>
         }
      </section>
   )
}
