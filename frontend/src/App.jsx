import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Listings from './pages/Listings'
import Show from './pages/Show'
import NewListing from './pages/NewListing'
import Edit from './pages/Edit'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div className='min-h-screen w-full '>
      <Navbar search={search} setSearch={setSearch} category={category} setCategory={setCategory}/>
      <Routes>
        <Route path='/' element={<Listings search={search} category={category}/>}/>
        <Route path='/listings/:id' element={<Show/>}/>
        <Route path='/newListing' element={<NewListing/>}/>
        <Route path='/listings/:id/edit' element={<Edit/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
