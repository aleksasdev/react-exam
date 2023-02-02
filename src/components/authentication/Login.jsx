import { MINIMUM_AGE_13 } from '@aleksasdev/validation-form'
import { MINIMUM_LENGTH_8 } from '@aleksasdev/validation-form'
import { HAVE_VALID_EMAIL } from '@aleksasdev/validation-form'
import { ValidationForm, ValidInput } from '@aleksasdev/validation-form'
import React, { useState } from 'react'
import { RememberMe } from './RememberMe';
import { Fetcher } from '@aleksasdev/json-api';
import { DATABASE_URL, USERS_ROUTE } from './../../constants/general';

export const Login = () => {

   const [shouldRememberMe, setShouldRememberMe] = useState(false);

   const handleLogin = async (values) =>{

      const [email, password] = values;

      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();

      const isEmailValid = Array.isArray(allUsers) && allUsers.find(user => user.email === email);

      if(!isEmailValid){
         window.alert("Email doesn't exist");
         return;
      }

      console.log(shouldRememberMe);
   }
    
   return (
      <section id="login">
         <ValidationForm onCompleted={handleLogin} label="Login">
            <p>Email</p>
            <ValidInput name="email" requirements={[HAVE_VALID_EMAIL]} />
            <p>Password</p>
            <ValidInput name="password" requirements={[MINIMUM_LENGTH_8]} />

            <RememberMe setShouldRememberMe={setShouldRememberMe} />
         </ValidationForm>

      </section>
   )
}
