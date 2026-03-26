import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen my-20 pt-10 max-w-xl mx-auto'>
      <h1 className='text-center text-4xl font-semibold text-shadow-md'>Login to BookMyStay</h1>
      <form className='border rounded-xl p-8 mt-8' action="">
        <div>
          <label className='text-xl' htmlFor="username">Username</label>
          <input className='w-full outline-0 border border-slate-500 rounded-md px-4 py-2 shadow-sm shadow-black mt-2' type="text" name='username'/>
        </div>

        <div className='my-8'>
          <label className='text-xl' htmlFor="password">Password</label>
          <input className='w-full outline-0 border border-slate-500 rounded-md px-4 py-2 shadow-sm shadow-black mt-2' type="password" name="password"  />
        </div>
        <div className='flex justify-center items-center'>
          <button className='bg-red-500 w-full py-2 px-8 rounded-md text-white font-medium cursor-pointer shadow-sm shadow-black active:scale-98 active:shadow-none transition-all duration-200' type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
