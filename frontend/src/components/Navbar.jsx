import React from 'react'
import {TentTree} from 'lucide-react'
import API from '../api/axios'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const handleLogout = async()=>{
    try {
      const res = await API.post('/auth/logout');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='fixed top-0 left-0 z-20 flex justify-between items-center h-20 w-full px-8 py-2 shadow-md bg-white'>
      <div className='flex gap-4 items-center'>
        <TentTree className='h-10 w-10 text-red-500' />
        <h1 className='text-2xl font-semibold text-shadow-sm'>BookMyStay</h1>
      </div>
      <div className='flex gap-4 items-center'>
        <input 
            type="text" 
            placeholder='Enter your destination'
            className='outline-0 border rounded-md border-slate-500 py-1 px-4 shadow-sm shadow-black' 
        />
        <button className='rounded-lg px-4 py-1 bg-red-500 text-white font-medium cursor-pointer shadow-sm shadow-black active:shadow-none active:scale-99 transition-all duration-200'>Search Listings</button>
      </div>
      <div className='flex gap-10 items-center'>
        <Link to='/newListing' className='font-medium text-white bg-red-500 rounded-md px-4 py-1 shadow-sm shadow-black active:shadow-none active:scale-95 transition-all duration-300'>Create New Listing</Link>
        <button onClick={handleLogout} className='font-medium text-red-500 cursor-pointer text-lg flex items-center text-shadow-md'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
