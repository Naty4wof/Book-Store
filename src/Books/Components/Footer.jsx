import React from 'react'
import book from '../../assets/chair.jpg'
import logo from '../../assets/react.svg'



const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <footer className='p-8 mx-24'>
        <div className='flex justify-between'>
            <div className='mb-8'>
                <img  className='w-[100px] h-[100px]' src={book} alt="" />
                <ul className='text-zinc-300 text-xs mt-4 flex space-x-2'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <p className='my-4 text-xs'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum.
                </p>
                <div className='flex'>
                    <input className='text-xs w-full outline-none rounded-l-[4px] pl-2' placeholder='Enter your email' type="text" />
                    <button className='text-xs rounded-r-[4px] bg-yellow-400 hover:bg-yellow-500 px-2 py-1 text-black'>Subscribe</button>
                </div>
            </div>
        </div>
        <hr />
        <div className=' mt-4 flex justify-between'>
            <div className='text-zinc-300 text-xs flex space-x-4'>
                <p>Private Policy</p>
                <p>Term of Services</p>
            </div>
            <div className='flex space-x-2'>
                <img className='w-[10px]' src={logo} alt="" />
                <img className='w-[10px]' src={logo} alt="" />
                <img className='w-[10px]' src={logo} alt="" />
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
