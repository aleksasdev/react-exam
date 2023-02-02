import React, { useContext, useState } from 'react'
import './posts.css'
import { PostBody } from './PostBody';
import { UserContext } from '@/contexts/UserProvider';

export const AddPost = () => {

   const { user } = useContext(UserContext);

   const [values, setValues] = useState({
      title: null,
      thumbnailUrl: null,

   })

   const handleChange = (e) =>{
      const newValue = e.target.value;

      setValues({
         ...values,
         [e.target.name]: newValue
      })
   }

   return (
      <section id="new-post">
         <PostBody data={{...values, ownerName: user.email}} />

         <form className='post-form'>
            <p>Title</p>
            <input name="title" onChange={handleChange} value={values.title} type="text" className="input-style" />
            <p>Thumbnail Url</p>
            <input name="thumbnailUrl" onChange={handleChange} value={values.thumbnailUrl} type="text" className="input-style" />
         </form>
      </section>
   )
}
