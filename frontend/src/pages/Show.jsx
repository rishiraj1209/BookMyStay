import React from 'react'

const listing = {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:  "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  }

const Show = () => {
  return (
    <div className='max-w-5xl mx-auto mt-20 py-10 mb-20 min-h-screen'>
      <div className='w-full px-2'>
        <img className='w-full h-100 object-cover rounded-xl' src={listing.image} alt="" />
        <div className='px-4 py-8'>
          <h1 className='text-4xl font-semibold text-shadow-md'>{listing.title}</h1>
          <p className='text-lg max-w-2xl mt-4'>{listing.description}</p>
          <p className='text-xl font-semibold mt-4'>Price : ₹ {listing.price}</p>
          <p className='text-lg mt-4'><span>{listing.location}, </span> {listing.country}</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Show
