import React, { useContext } from 'react'
import { UserContext } from '@/contexts/UserProvider';
import { RenderPosts } from '@/components/posts/RenderPosts';
import './home.css'

export const Home = () => {

   const { user } = useContext(UserContext);

   return (
      <section id="home">
         {user
         ?
            <RenderPosts />
         :
            <p>Please login.</p>
         }
      </section>
   )
}
