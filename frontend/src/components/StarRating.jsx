import React from 'react'

const StarRating = ({rating,setRating}) => {
  return (
    <div className='flex gap-1'>
      {[1,2,3,4,5].map((star)=>(
        <span 
        key={star}
        className={`cursor-pointer text-3xl ${star <= rating ? 'text-yellow-500':'text-gray-500'}`}
        onClick={()=>{setRating(star)}}
        >★</span>
      ))}
    </div>
  )
}

export default StarRating
