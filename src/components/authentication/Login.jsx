import { MINIMUM_AGE_13 } from '@aleksasdev/validation-form'
import { MINIMUM_LENGTH_8 } from '@aleksasdev/validation-form'
import { HAVE_VALID_EMAIL } from '@aleksasdev/validation-form'
import { ValidationForm, ValidInput } from '@aleksasdev/validation-form'
import React, { useContext, useState } from 'react'
import { RememberMe } from './RememberMe';
import { Fetcher } from '@aleksasdev/json-api';
import { DATABASE_URL, USERS_ROUTE } from './../../constants/general';
import { UserContext } from './../../contexts/UserProvider';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

   const { authenticateUser } = useContext(UserContext);
   const [shouldRememberMe, setShouldRememberMe] = useState(false);
   const navigator = useNavigate();

   const handleRememberMe = (email, password) =>{
      if(!shouldRememberMe) return;

      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
   }

   const handleLogin = async (values) =>{

      const [email, password] = values;

      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();

      const currentUser = Array.isArray(allUsers) && allUsers.find(user => user.email === email);
      if(!currentUser){
         window.alert("Email doesn't exist");
         return;
      }

      const isPasswordValid = currentUser.password === password;
      if(!isPasswordValid){
         window.alert("Password is invalid");
         return;
      }

      await handleRememberMe(email, password);
      await authenticateUser(currentUser);
      await navigator("/");      
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
