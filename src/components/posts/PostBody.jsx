import React from 'react'

export const PostBody = ({ data }) => {

   const { title, location, price, thumbnailUrl, ownerName, ownerNumber } = data;

   return (
      <div className="post">
         <p className='title'>{title}</p>
         <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
      </div>
   )
}
