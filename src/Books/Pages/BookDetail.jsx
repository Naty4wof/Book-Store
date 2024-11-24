import React from 'react'
import Navbar from '../Components/Navbar'
import book from '../../assets/chair.jpg'

const BookDetail = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='border p-2 rounded-sm mx-32 my-16 w-fit flex flex-col space-y-4'>
        <p className='font-bold text-xl'>Title</p>
        <div className='rounded-[4px] p-1'>
            <img className='rounded-[4px] transform hover:scale-105 duration-200 h-[210px] w-[160px]' src={book} alt="" />
        </div>
        <div className='text-xs max-w-[350px] flex flex-col justify-center space-y-4'>
            <div className='flex'>
                <span className='font-bold'>Author:</span>
                <p className="text-zinc-500"></p> 
            </div>
            <div className='flex'>
                <span className='font-bold'>Published:</span>
                <p className="text-zinc-500"></p>
            </div>
            <div className='flex'>
                <span className='font-bold'>Catagory:</span>
                <p className="text-zinc-500"></p>
            </div>
            <div className='flex'>
                <span className='font-bold'>Description:</span>
                <p className="text-zinc-500"></p>
                
            </div>
            <button className='px-4 py-1 rounded-[4px] w-fit bg-yellow-400 hover:bg-yellow-500 text-xs font-bold'>
              Add to cart
            </button>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
