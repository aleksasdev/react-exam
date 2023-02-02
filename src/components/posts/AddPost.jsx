import React, { useContext, useState } from 'react'
import './posts.css'
import { PostBody } from './PostBody';
import { UserContext } from '@/contexts/UserProvider';

export const AddPost = () => {

   const { user } = useContext(UserContext);

   const [values, setValues] = useState({
      title: "",
      thumbnailUrl: "",
      price: "",
      location: "",

   })

   const handleChange = (e) =>{
      const newValue = e.target.value;

      setValues({
         ...values,
         [e.target.name]: newValue
      })
   }

   const handleSubmit = () =>{
      e.preventDefault();

      
   }

   return (
      <>
      {user &&
      <section id="new-post">
            <PostBody data={{...values, ownerName: user.name, ownerAvatarUrl: user.avatarUrl}} />

            <form className='post-form' onSubmit={handleSubmit}>
               <p>Title</p>
               <input name="title" onChange={handleChange} value={values.title} type="text" className="input-style" required />
               <p>Thumbnail Url</p>
               <input name="thumbnailUrl" onChange={handleChange} value={values.thumbnailUrl} type="text" className="input-style" required />
               <p>Price</p>
               <input name="price" onChange={handleChange} value={values.price} type="text" className="input-style" required />
               <p>Location</p>
               <input name="location" onChange={handleChange} value={values.location} type="text" className="input-style" required />

               <input className="button-style" type="submit" value="Post" />
            </form>
      </section>
      }
      </>
   )
}
