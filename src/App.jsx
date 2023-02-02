import { useState } from 'react'
import "@/components/main/common.css"
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/main/Navbar'
import { Login } from './components/authentication/Login';
import { UserProvider } from './contexts/UserProvider';
import { Home } from './components/main/home/Home';
import { Register } from './components/authentication/Register';
import { Footer } from './components/main/Footer';
import { Logout } from './components/authentication/Logout';
import { AddPost } from './components/posts/AddPost';
import { PostsProvider } from './contexts/PostsProvider';

function App() {

   return (

      <UserProvider>
         <PostsProvider>
            <Routes>
               <Route element={<Navbar />}>
                  <Route path='/' element={<Home />} />
                  <Route path='/logout' element={<Logout />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/add-post' element={<AddPost />} />
               </Route>
            </Routes>

            <Footer />
         </PostsProvider>
      </UserProvider>

   )
}

export default App
