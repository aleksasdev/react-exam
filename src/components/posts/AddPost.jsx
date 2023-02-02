import React, { useContext, useState } from 'react'
import './posts.css'
import { PostBody } from './PostBody';
import { UserContext } from '@/contexts/UserProvider';
import { PostsContext } from './../../contexts/PostsProvider';
import { useNavigate } from 'react-router-dom';

export const AddPost = () => {

   const { user } = useContext(UserContext);
   const { addNewPost } = useContext(PostsContext);
   const navigator = useNavigate();

   const [values, setValues] = useState({
      title: "",
      thumbnailUrl: "",
      price: "",
      location: "",
      description: "",

   })

   const handleChange = (e) =>{
      const newValue = e.target.value;

      setValues({
         ...values,
         [e.target.name]: newValue
      })
   }

   const handleSubmit = (e) =>{
      e.preventDefault();

      addNewPost(values);
      navigator("/");
   }

   return (
      <>
      {user &&
      <section id="new-post">
         <PostBody data={{
            ...values, 
            ownerName: user.name,
            ownerEmail: user.email,
            ownerAvatarUrl: user.avatarUrl
         }} />

         <form className='post-form' onSubmit={handleSubmit}>
            <p>Title</p>
            <input name="title" onChange={handleChange} value={values.title} type="text" className="input-style" required />
            <p>Thumbnail Url</p>
            <input name="thumbnailUrl" onChange={handleChange} value={values.thumbnailUrl} type="url" className="input-style" required />
            <p>Price</p>
            <input name="price" onChange={handleChange} value={values.price} type="text" className="input-style" required />
            <p>Location</p>
            <input name="location" onChange={handleChange} value={values.location} type="text" className="input-style" required />
            <p>Description</p>
            <textarea name="description" onChange={handleChange} value={values.description} type="text" className="input-style" required />

            <input className="button-style" type="submit" value="Post" />
         </form>
      </section>
      }
      </>
   )
}
