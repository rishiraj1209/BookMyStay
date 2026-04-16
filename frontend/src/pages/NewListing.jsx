import React from 'react'
import { useState } from 'react'
import API from '../api/axios';

const NewListing = () => {
  const [formData, setFormData] = useState({
    title:"",
    description:"",
    price:"",
    location:"",
    country:"",
    image:"",
  });

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]:value}));
  }

  const handlesubmit = async(e)=>{
    e.preventDefault();
    try{
      const {title, description, price, location, country, image} = formData;
      if(!title || !description || !price || !location || !country || !image){
        return alert("please enter all fields");
      }
      const response = await API.post('/listings/new', formData);
      console.log(response);
    }catch(error){
      console.log(error.message);
    }
  }


  return (
    <div className='my-20 min-h-screen max-w-3xl mx-auto py-10'>
      <h1 className='text-4xl font-semibold text-shadow-md text-center mb-8'>Create a new Listing</h1>
      <form className='flex flex-col space-y-8' action="" onSubmit={handlesubmit}>
        <div className=''>
          <label className='text-xl' htmlFor="title">Enter Title</label>
          <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' name='title' type="text" value={formData.title} onChange={handleChange} />
        </div>
        <div className=''>
          <label className='text-xl' htmlFor="description">Enter Description</label>
          <textarea className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' name='description' type="text" value={formData.description} onChange={handleChange} />
        </div>
        <div className=''>
          <label className='text-xl' htmlFor="image">Upload Image</label>
          <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' type="text" name="image" value={formData.image} onChange={handleChange} />
        </div>

        <div className='flex items-center w-full gap-8'>
          <div className='w-1/2'>
            <label className='text-xl' htmlFor="price">Price</label>
            <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' type="number" name="price" value={formData.price} onChange={handleChange} />
          </div>

          <div className='w-1/2'>
            <label className='text-xl' htmlFor="country">Country</label>
            <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' type="text" name='country' value={formData.country} onChange={handleChange} />
          </div>
        </div>

        <div className=''>
          <label className='text-xl' htmlFor="location">Location</label>
          <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' type="text" name='location' value={formData.location} onChange={handleChange} />
        </div>

        <button type='submit' className='bg-red-500 px-8 py-2 text-white font-medium rounded-md shadow-sm shadow-black cursor-pointer active:shadow-none active:scale-98 transition-all duration-150'>Submit</button>
      </form>
    </div>
  )
}

export default NewListing
