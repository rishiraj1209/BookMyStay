import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import { sampleListings } from '../../init/data'
import { Eye } from 'lucide-react'
import { useEffect } from 'react'
import { useState } from 'react'
import API from '../api/axios'
import { Link } from 'react-router-dom'

const Listings = ({search,category}) => {
    const [allListings, setAllListings] = useState([]);
    useEffect(()=>{
        const getAllListings = async ()=>{
            try{
                const response = await API.get('/listings',{
                    params: { search, category }
                });
                setAllListings(response.data);
            }catch(error){
                console.log(error.message);
            }
        }

        getAllListings();
    },[search,category])

  return (
    <div className='grid grid-cols-3 gap-8 mt-20 px-12 py-12 min-h-screen'>
        {allListings && allListings.map((listing,index)=>(
            <div className='rounded-xl w-110 h-90 shadow-[4px_4px_0px_black] border p-2 cursor-pointer' key={index}>
                <img className='w-full h-[80%] rounded-xl mb-4 object-cover' src={listing.image} alt="" />
                <div className='flex justify-between items-center px-2 py-2'>
                    <h1>{listing.title}</h1>
                    <button className='flex items-center gap-2 cursor-pointer px-4 py-1 rounded-full bg-red-500 text-white active:scale-99 transition-all duration-200'><Link to={`/listings/${listing._id}`}>preview</Link></button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Listings

