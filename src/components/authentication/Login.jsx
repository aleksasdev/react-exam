import { MINIMUM_AGE_13 } from '@aleksasdev/validation-form'
import { MINIMUM_LENGTH_8 } from '@aleksasdev/validation-form'
import { HAVE_VALID_EMAIL } from '@aleksasdev/validation-form'
import { ValidationForm, ValidInput } from '@aleksasdev/validation-form'
import React from 'react'

export const Login = () => {

   const handleLogin = () =>{

   }
    
   return (
      <ValidationForm onCompleted={handleLogin} label="Login">
         <p>Email</p>
         <ValidInput name="email" requirements={[HAVE_VALID_EMAIL]} />
         <p>Password</p>
         <ValidInput name="password" requirements={[MINIMUM_LENGTH_8]} />
      </ValidationForm>
   )
}
