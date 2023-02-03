import React, { useContext } from 'react'
import { UserContext } from '@/contexts/UserProvider';

export const Post = ({ data }) => {

   const { title, location, price, thumbnailUrl,
      description, ownerEmail, ownerName, ownerAvatarUrl } = data;


   return (
      <div className="post">
         <span className="owner-span">
            <img className="owner-avatar" src={ownerAvatarUrl} alt="avatar" />
            <p className='owner-name'>{ownerName}</p>
            <p className='owner-email'>{ownerEmail}</p>
         </span>
         
         <div className="price-wrapper">
            <span className='price-span'>
               <p>💰</p>
               <h3 className='price'>{price}$</h3>
            </span>
            <span className="location-span">
               <p className="location">{location}</p>
            </span>
         </div>

         <span className="title-span">
            <h1 className='title'>{title ? title : "TITLE"}</h1>
         </span>

         {thumbnailUrl
         ?
            <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
         :
            <p className='thumbnail-alt'></p>
         }

         <div className="description-container">
            <p>{description}</p>
         </div>
      </div>
   )
}
