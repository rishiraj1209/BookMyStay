import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import API from '../api/axios';
import { Link, useParams } from 'react-router-dom';

const Show = () => {
  const {id} = useParams();
  const [listing, setListing] = useState(null);
  useEffect(()=>{
    //fetch listing details from backend using listing id
    const getListingDetails = async()=>{
      try{
        const response = await API.get(`/listings/${id}`);
        setListing(response.data);
      }catch(error){
        console.log(error);
      }
    }

    getListingDetails();
  },[]);

  const handleDelete = async ()=>{
    try {
      const response = await API.delete(`/listings/${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  if (!listing) {
    return <h1 className="text-center mt-20 text-4xl py-20">Loading...</h1>;
  }
  return (
    <div className='max-w-5xl mx-auto mt-20 py-10 mb-20 min-h-screen'>
      <div className='w-full px-2'>
        <img className='w-full h-100 object-cover rounded-xl' src={listing?.image} alt="" />
        <div className='px-4 py-8'>
          <h1 className='text-4xl font-semibold text-shadow-md'>{listing.title}</h1>
          <p className='text-lg max-w-2xl mt-4'>{listing.description}</p>
          <p className='text-xl font-semibold mt-4'>Price : ₹ {listing.price}</p>
          <p className='text-lg mt-4'><span>{listing.location}, </span> {listing.country}</p>
        </div>
        <div className='flex gap-10 items-center'>
          <button className='px-8 py-2 bg-green-500 rounded text-white font-medium'><Link to={`/listings/${listing._id}/edit`}>Edit</Link></button>
          <button onClick={handleDelete} className='px-8 py-2 bg-red-500 rounded text-white font-medium cursor-pointer'>Delete</button>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Show
