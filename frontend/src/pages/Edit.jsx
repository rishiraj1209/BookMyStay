import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import API from '../api/axios';

const Edit = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      title:"",
      description:"",
      price:"",
      location:"",
      country:"",
      image:"",
      category:"",
    });

  const {id} = useParams();
  useEffect(()=>{

    const fetchListing = async ()=>{
      try {
        const res = await API.get(`/listings/${id}`);
        setFormData(res.data);
      } catch (error) {
        console.log(error);
        if(error.response && error.response.status === 401){
          navigate('/login')
        }else{
          alert('something went wrong');
        }
      }
      
    }

    fetchListing();
  },[id]);

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData(prev=>({...prev, [name]:value}));
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await API.put(`/listings/${id}`,formData);
      navigate(`/listings/${id}`);
    } catch (error) {
      console.log(error);
      if(error.response && error.response.status === 401){
          navigate('/login')
        }else{
          alert('something went wrong');
        }
    }
  }

  if (!formData.title) {
    return <h1 className="text-center mt-20">Loading...</h1>;
  }

  return (
    <div className='my-20 min-h-screen max-w-3xl mx-auto py-10'>
      <h1 className='text-4xl font-semibold text-shadow-md text-center mb-8'>Edit Listing</h1>
      <form className='flex flex-col space-y-8' onSubmit={handleSubmit}>
        <div className=''>
          <label className='text-xl' htmlFor="title">Enter Title</label>
          <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' name='title' type="text" value={formData.title} onChange={handleChange} required/>
        </div>
        <div className=''>
          <label className='text-xl' htmlFor="description">Enter Description</label>
          <textarea className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' name='description' type="text" value={formData.description} onChange={handleChange} required/>
        </div>
        <div className=''>
          <label className='text-xl' htmlFor="image">Upload Image</label>
          <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' type="text" name="image" value={formData.image} onChange={handleChange} />
        </div>

        <div className='flex items-center w-full gap-8'>
          <div className='w-1/2'>
            <label className='text-xl' htmlFor="price">Price</label>
            <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' type="number" name="price" value={formData.price} onChange={handleChange} required/>
          </div>

          <div className='w-1/2'>
            <label className='text-xl' htmlFor="country">Country</label>
            <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' type="text" name='country' value={formData.country} onChange={handleChange} required/>
          </div>
        </div>

        <div className=''>
          <label className='text-xl' htmlFor="location">Location</label>
          <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' type="text" name='location' value={formData.location} onChange={handleChange} required/>
        </div>

        <div className="mb-3">
            <label htmlFor="category">Category</label>
            <select name="category" value={formData.category} onChange={handleChange}  required>
                <option value="">Select a category</option>
                <option value="Trending">Trending</option>
                <option value="Rooms">Rooms</option>
                <option value="Beach">Beach</option>
                <option value="Mountains">Mountains</option>
                <option value="Castles">Castles</option>
                <option value="Camping">Camping</option>
                <option value="Arctic">Arctic</option>
                <option value="Iconic cities">Iconic cities</option>
                <option value="Amazing pools">Amazing pools</option>
            </select>
        </div>

        <button type='submit' className='bg-red-500 px-8 py-2 text-white font-medium rounded-md shadow-sm shadow-black cursor-pointer active:shadow-none active:scale-98 transition-all duration-150'>Submit</button>
      </form>
    </div>
  )
}

export default Edit
