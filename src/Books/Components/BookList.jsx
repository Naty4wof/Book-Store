import React, { useState } from 'react'
import books from '../../assets/gaming-pc.jpg'
import { Link } from 'react-router-dom'
import TaskService from '../../TaskService'

const BookList = () => {
  return (
    <div className='mx-32 mb-32'>
      <div>
        <div>
            <p className='font-bold text-xl'>Top Sellers</p>
            <p>Choose a genre</p>
        </div>
          <div className='space-x-16 flex overflow-x-auto p-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200' >
              <div className='w-fit flex space-x-4'>
                  <div className='rounded-[4px] border p-1'>
                    <img className='rounded-[4px] transform hover:scale-105 duration-200 h-[210px] w-[160px]' src={books} alt="" />
                  </div>
                  <div className='max-w-[300px] border flex flex-col justify-center space-y-4'>
                    <p className='font-bold'>title</p>
                    <p className='text-zinc-500 text-sm'>discriprion</p>
                    <p className='text-sm'>Price</p>
                    <button className='bg-yellow-400 text-xs font-bold w-full'>
                      <Link to='/Cart'>Add to cart</Link>
                    </button>
                  </div>
                </div>
      
          </div>
      </div>
    </div>
  )
}

export default BookList
