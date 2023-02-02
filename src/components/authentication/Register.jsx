import React from 'react'
import { ValidationForm, ValidInput, MINIMUM_LENGTH_8 } from '@aleksasdev/validation-form';
import { HAVE_VALID_EMAIL } from '@aleksasdev/validation-form';
import { HAVE_VALID_URL } from '@aleksasdev/validation-form';
import { Fetcher } from '@aleksasdev/json-api';
import { DATABASE_URL, USERS_ROUTE } from './../../constants/general';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

   const navigator = useNavigate();

   const handleRegistration = async (values) =>{
      const [email, password, repeatPassword, avatarUrl] = values;

      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();
      const isEmailAlreadyTaken = Array.isArray(allUsers) && allUsers.find(user => user.email === email);

      if(isEmailAlreadyTaken){
         window.alert("Email is already taken, sorry...");
         return;
      }

      if(password !== repeatPassword){
         window.alert("Passwords don't match");
         return;
      }

      await new Fetcher(DATABASE_URL+USERS_ROUTE).post({
         id: nanoid(),
         email,
         password,
         avatarUrl
      })

      navigator("/login");
   }

   return (
      <section id="register">
         <ValidationForm onCompleted={handleRegistration} label="Register" >
            <p>Email</p>
            <ValidInput name="email" requirements={[HAVE_VALID_EMAIL]} />
            <p>Password</p>
            <ValidInput name="password" requirements={[MINIMUM_LENGTH_8]} />
            <p>Repeat Password</p>
            <ValidInput name="repeatPassword" requirements={[MINIMUM_LENGTH_8]} />
            <p>Avatar Url</p>
            <ValidInput name="avatarUrl" requirements={[HAVE_VALID_URL]} />
         </ValidationForm>
      </section>
   )
}
