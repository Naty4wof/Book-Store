import React from 'react'
import logo from '../../assets/react.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between w-full px-32 mt-2'>
      <div className='space-x-8 flex items-center'>
        <div className=''> 
            <img className='w-4' src={logo} alt="" />
        </div>
        <div>
            <input
            className='w-48 py-[2px] border rounded-lg outline-none bg-zinc-100 placeholder:text-zinc-500 text-[10px] px-4' 
            type="text" 
            placeholder='What are you looking for?'
            />
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <Link to='/Login'><img className='w-4' src={logo} alt="" /></Link>
        <img className='w-4' src={logo} alt="" />
        <img className='w-4' src={logo} alt="" />
      </div>
    </div>
  )
}

export default Navbar
