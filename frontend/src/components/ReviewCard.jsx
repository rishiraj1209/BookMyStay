import React from 'react'
import API from '../api/axios'

const ReviewCard = ({review}) => {
  return (
    <div className='border rounded-xl px-4 py-2'>
      <p>{"⭐".repeat(review.rating)}</p>
      <p className='my-4'>{review.comment}</p>
    </div>
  )
}

export default ReviewCard
