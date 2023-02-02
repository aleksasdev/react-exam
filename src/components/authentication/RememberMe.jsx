import React from 'react'
import './authentication.css'

export const RememberMe = ({ setShouldRememberMe }) => {

   const handleSavingDetails = () =>{
      setShouldRememberMe(current => !current);
   }

   return (
      <div className='remember-me-container'>
         <p>Remember me</p>
         <input onClick={handleSavingDetails} type="checkbox" name="" id="" />
      </div>
   )
}
