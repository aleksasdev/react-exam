import React, { createContext, useEffect, useState} from 'react'
import { Fetcher } from '@aleksasdev/json-api';
import { DATABASE_URL } from '@/constants/general';
import { POSTS_ROUTE } from './../constants/general';
import { nanoid } from 'nanoid';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {

   const [posts, setPosts] = useState(null);

   const loadPosts = async () =>{
      const allPosts = await new Fetcher(DATABASE_URL+POSTS_ROUTE).get();
      setPosts(allPosts);
   }

   const addNewPost = async (postObject) =>{
      postObject.id = nanoid();

      await new Fetcher(DATABASE_URL+POSTS_ROUTE).post(postObject);
      setPosts(current => [...current, postObject]);
   }

   useEffect(()=>{
      loadPosts();
   }, [])

   return (
      <PostsContext.Provider value={{
         posts, setPosts,
         addNewPost
      }}>
         {children}
      </PostsContext.Provider>
   )
}
