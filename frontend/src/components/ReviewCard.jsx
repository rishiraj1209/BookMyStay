import React from 'react'

const ReviewCard = ({review}) => {
  return (
    <div className='border rounded-xl px-4 py-2'>
      <h1 className='font-semibold text-xl'>{review.author}</h1>
      <p>{"⭐".repeat(review.rating)}</p>
      <p className='my-4'>{review.comment}</p>
      <button className='bg-red-500 cursor-pointer rounded px-2 py-1 text-white'>delete</button>
    </div>
  )
}

export default ReviewCard
