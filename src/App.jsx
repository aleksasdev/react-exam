import { useState } from 'react'
import "@/components/main/common.css"
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/main/Navbar'
import { Login } from './components/authentication/Login';
import { UserProvider } from './contexts/UserProvider';
import { Home } from './components/main/home/Home';
import { Register } from './components/authentication/Register';

function App() {

   return (

      <UserProvider>
         <Routes>
            <Route element={<Navbar />}>
               <Route path='/' element={<Home />} />
               <Route path='/login' element={<Login />} />
               <Route path='/register' element={<Register />} />
            </Route>
         </Routes>
      </UserProvider>

   )
}

export default App
