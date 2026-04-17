import React from 'react'
import API from '../api/axios'
import { useParams } from 'react-router-dom'

const ReviewCard = ({review}) => {
  const {id} = useParams();

  const handleReviewDelete = async()=>{
    try {
      const res = await API.delete(`/listings/${id}/reviews/${review._id}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className='border rounded-xl px-4 py-2'>
      <h1 className='font-semibold text-xl'>{review.author}</h1>
      <p>{"⭐".repeat(review.rating)}</p>
      <p className='my-4'>{review.comment}</p>
      <button onClick={handleReviewDelete} className='bg-red-500 cursor-pointer rounded px-2 py-1 text-white'>delete</button>
    </div>
  )
}

export default ReviewCard
