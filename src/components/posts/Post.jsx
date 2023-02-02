import React, { useContext } from 'react'
import { UserContext } from '@/contexts/UserProvider';

export const Post = ({ data }) => {

   const { user } = useContext(UserContext);
   const { title, location, price, thumbnailUrl,
      description
   } = data;


   return (
      <div className="post">
         <span className="owner-span">
            <img className="owner-avatar" src={user.avatarUrl} alt="avatar" />
            <p className='owner-name'>{user.name}</p>
            <p className='owner-email'>{user.email}</p>
         </span>

         <span className="title-span">
            <p className='title'>Title: {title}📕</p>
            <p className='price'>Price: {price}💲</p>
         </span>

         {thumbnailUrl
         ?
            <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
         :
            <p className='thumbnail-alt'>*Your thumbnail goes here*</p>
         }

         <div className="description-container">
            <p>{description}</p>
         </div>
      </div>
   )
}
