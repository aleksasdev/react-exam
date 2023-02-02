import React from 'react'

export const PostBody = ({ data }) => {

   const { title, location, price, thumbnailUrl,
      description, ownerName, ownerEmail, ownerAvatarUrl
   } = data;

   return (
      <div className="post">
         <span className="owner-span">
            <img className="owner-avatar" src={ownerAvatarUrl} alt="avatar" />
            <p className='owner-name'>{ownerName}</p>
            <p className='owner-email'>{ownerEmail}✉️</p>
         </span>

         <span className="title-span">
            <p className='title'>Title: {title}📕</p>
            <p className='price'>Price: {price}💲</p>
         </span>
         <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />

         <div className="description-container">
            <p>{description}</p>
         </div>
      </div>
   )
}
