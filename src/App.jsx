import { useState } from 'react'
import "@/components/main/common.css"
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/main/Navbar'
import { Login } from './components/authentication/Login';

function App() {

   return (
      <div className="App">
         <Routes>
            <Route element={<Navbar />}>
               <Route path='/' element={<Login />} />
               <Route path='/login' element={<Login />} />
            </Route>
         </Routes>
      </div>
   )
}

export default App
