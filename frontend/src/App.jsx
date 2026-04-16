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

const App = () => {
  return (
    <div className='min-h-screen w-full '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Listings/>}/>
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
