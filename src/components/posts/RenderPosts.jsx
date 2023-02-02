import React, { useContext } from 'react'
import { PostsContext } from '@/contexts/PostsProvider';
import { Loading } from '@/components/general/Loading';
import { Post } from './Post';
import { nanoid } from 'nanoid';

export const RenderPosts = () => {

   const { posts } = useContext(PostsContext);

   const renderThem = () =>{

      if(!posts) return <Loading />
      if(posts.length === 0) return (<p>There are no posts yet😥</p>)

      return (
         posts.map(post => <Post data={post} key={nanoid()}/> )
      )
   }

   return (
      <>
      {renderThem()}
      </>
   )
}
