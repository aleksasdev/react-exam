import React from 'react'

export const PostBody = ({ data }) => {

   const { title, location, price, thumbnailUrl, ownerName, ownerAvatarUrl } = data;

   return (
      <div className="post">
         <span className="owner-span">
            <img className="owner-avatar" src={ownerAvatarUrl} alt="avatar" />
            <p className='owner-name'>{ownerName}</p>
         </span>

         <span className="title-span">
            <p className='title'>{title}</p>
            <p className='price'>Price: {price}$</p>
         </span>
         <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
      </div>
   )
}
