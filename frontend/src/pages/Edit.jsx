import React from 'react'

const Edit = () => {
  return (
    <div className='my-20 min-h-screen max-w-3xl mx-auto py-10'>
      <h1 className='text-4xl font-semibold text-shadow-md text-center mb-8'>Edit Listing</h1>
      <form className='flex flex-col space-y-8' action="">
        <div className=''>
          <label className='text-xl' htmlFor="title">Enter Title</label>
          <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' name='title' type="text" />
        </div>
        <div className=''>
          <label className='text-xl' htmlFor="description">Enter Description</label>
          <textarea className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' name='description' type="text" />
        </div>
        <div className=''>
          <label className='text-xl' htmlFor="image">Upload Image</label>
          <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' type="file" name="image" />
        </div>

        <div className='flex items-center w-full gap-8'>
          <div className='w-1/2'>
            <label className='text-xl' htmlFor="price">Price</label>
            <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' type="number" name="price" />
          </div>

          <div className='w-1/2'>
            <label className='text-xl' htmlFor="country">Country</label>
            <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' type="text" name='country'/>
          </div>
        </div>

        <div className=''>
          <label className='text-xl' htmlFor="location">Location</label>
          <input className='flex-1 outline-0 border-slate-500 shadow-sm shadow-black rounded-md py-2 px-8 w-full mt-2' type="text" name='location'/>
        </div>

        <button type='submit' className='bg-red-500 px-8 py-2 text-white font-medium rounded-md shadow-sm shadow-black cursor-pointer active:shadow-none active:scale-98 transition-all duration-150'>Submit</button>
      </form>
    </div>
  )
}

export default Edit
