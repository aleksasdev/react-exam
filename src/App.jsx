import { useState } from 'react'
import "@/components/main/common.css"
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/main/Navbar'
import { Login } from './components/authentication/Login';
import { UserProvider } from './contexts/UserProvider';

function App() {

   return (
      <div className="App">

         <UserProvider>
            <Routes>
               <Route element={<Navbar />}>
                  <Route path='/' element={<Login />} />
                  <Route path='/login' element={<Login />} />
               </Route>
            </Routes>
         </UserProvider>

      </div>
   )
}

export default App