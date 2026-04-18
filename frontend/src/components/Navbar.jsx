import React from 'react'
import { TentTree } from 'lucide-react'
import API from '../api/axios'
import { Link } from 'react-router-dom'

const Navbar = ({ search, setSearch, category, setCategory }) => {

  const handleLogout = async () => {
    try {
      const res = await API.post('/auth/logout');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Top Navbar */}
      <div className='fixed top-0 left-0 z-20 flex justify-between items-center h-20 w-full px-8 py-2 shadow-md bg-white'>
        <Link to='/' onClick={()=>{setCategory("");setSearch("")}}>
          <div className='flex gap-4 items-center'>
            <TentTree className='h-10 w-10 text-red-500' />
            <h1 className='text-2xl font-semibold'>BookMyStay</h1>
          </div>
        </Link>
        

        <div className='flex gap-4 items-center'>
          <input 
            type="text" 
            placeholder='Enter your destination'
            className='outline-none border rounded-md border-slate-500 py-1 px-4 shadow-sm' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Button should just trigger fetch (optional) */}
          <button 
            className='rounded-lg px-4 py-1 bg-red-500 text-white font-medium cursor-pointer shadow-sm active:scale-95 transition-all'
          >
            Search Listings
          </button>
        </div>

        <div className='flex gap-10 items-center'>
          <Link 
            to='/newListing' 
            className='font-medium text-white bg-red-500 rounded-md px-4 py-1 shadow-sm active:scale-95'
          >
            Create New Listing
          </Link>

          <button 
            onClick={handleLogout} 
            className='font-medium text-red-500 cursor-pointer text-lg'
          >
            Logout
          </button>

          <Link
            to='/login'
            className='font-medium text-red-500 cursor-pointer text-lg'
          >
            Login
          </Link>
        </div>
      </div>

      {/* Category Filters */}
      <div className='flex gap-6 mt-24 px-6 overflow-x-auto'>

        {[
          "Trending","Rooms","Iconic cities","Amazing pools",
          "Beach","Mountains","Castles","Camping","Arctic"
        ].map((cat) => (
          <div 
            key={cat}
            className='cursor-pointer text-center'
            onClick={() => setCategory(cat)}
          >
            <p className={`font-medium ${category === cat ? "text-red-500" : ""}`}>
              {cat}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Navbar;