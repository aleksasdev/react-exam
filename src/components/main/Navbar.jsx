import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '@/contexts/UserProvider';
import logoSVG from '@/assets/other/logo.svg';

export const Navbar = () => {

   const { user } = useContext(UserContext);

   return (
      <>
         <nav>
            <img src={logoSVG} alt="" className="logo" />
            <Link to="/">Home</Link>
            {user
            ?
               <>
               <Link to='/add-post'>Add</Link>
               <Link to="/logout">Logout</Link>
               </>
            :
               <>
               <Link to="/login">Login</Link>
               <Link to="/register">Register</Link>
               </>
            }
         </nav>

         <Outlet />
      </>
   )
}
