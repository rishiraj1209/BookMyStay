import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import API from '../api/axios';
import { Link, useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import ReviewCard from '../components/ReviewCard';

const reviews = [
  {
    author:"rishi raj",
    rating:5,
    comment:"It's an amazing place to visit It's an amazing place to visit It's an amazing place to visit It's an amazing place to visit"
  },
  {
    author:"rishi raj",
    rating:4,
    comment:"It's an amazing place to visit It's an amazing place to visit It's an amazing place to visit It's an amazing place to visit"
  },
  {
    author:"rishi raj",
    rating:1,
    comment:"It's an amazing place to visit It's an amazing place to visit It's an amazing place to visit It's an amazing place to visit"
  },
  {
    author:"rishi raj",
    rating:5,
    comment:"It's an amazing place to visit It's an amazing place to visit It's an amazing place to visit It's an amazing place to visit"
  },
  {
    author:"rishi raj",
    rating:3,
    comment:"It's an amazing place to visit It's an amazing place to visit It's an amazing place to visit It's an amazing place to visit"
  },
]
  

const Show = () => {
  const {id} = useParams();
  const [listing, setListing] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
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
          <div className='flex gap-10 items-center px-2'>
            <button className='px-8 py-2 bg-green-500 rounded text-white font-medium'><Link to={`/listings/${listing._id}/edit`}>Edit</Link></button>
            <button onClick={handleDelete} className='px-8 py-2 bg-red-500 rounded text-white font-medium cursor-pointer'>Delete</button>
          </div>
      </div>


      {/* Reviews */}
      <div className='border-t-2 mt-10 py-4'>
        <div className=''>
          <h1 className=' text-2xl font-semibold text-shadow-md'>Add a Review</h1>
          <div >
            <form className='flex flex-col items-start' action="">
              <StarRating rating={rating} setRating={setRating}/>
              <textarea className='mt-2 outline-none border rounded-lg px-2 py-1 max-w-lg' name="comment" rows={5} cols={50}></textarea>
              <button type='submit' className='px-4 py-1 bg-red-500 text-white font-medium rounded-md mt-5 shadow-sm shadow-black cursor-pointer active:shadow-none active:scale-98 transition-all duration-300'>Submit</button>
            </form>
          </div>
        </div>

        <div >
          <p className=' text-2xl font-semibold text-shadow-md text-center my-5'>All Reviews</p>
          <div className='grid grid-cols-4 gap-10'>
            {reviews.map((review, idx)=>(
              <ReviewCard key={idx} review={review}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show
