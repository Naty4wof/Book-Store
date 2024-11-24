import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Navbar/>
      <div className='p-4 border border-zinc-200 flex items-center justify-center m-auto h-fit max-w-[250px]'>
        <div className="space-y-2">
          <div className='flex justify-center font-bold text-sm'>
            <p>Please Login</p>
          </div>
          <div>
            <p className='text-[10px] font-bold'>Email</p>
            <input type="text" className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-xs" placeholder='Email Adress' />
          </div>
          <div>
            <p className='text-[10px] font-bold'>Password</p>
            <input type="text" className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-xs" placeholder='Password' />
          </div>
          <button className='text-white text-xs bg-blue-500 px-2 rounded-[4px] py-[2px] font-bold'>
            Login
          </button>
          <div>
            <p className='text-[10px]'>Don't have an account? Please <Link to='/Signup' className='text-blue-500'>Register</Link></p>
          </div>
          <button className="bg-black text-white w-full text-[10px] mb-8 py-[2px] rounded-[4px]">
            Signin with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
