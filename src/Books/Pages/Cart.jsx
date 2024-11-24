import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import book from '../../assets/chair.jpg'

function Cart() {
  return (
    <div>
        <Navbar/>
        <div className='p-2 m-32 space-y-4 border shadow-sm'>
            <div className='flex justify-between'>
                <p>Shopping cart</p>
                <button className="text-[10px] text-white p-1 bg-red-600">
                    Clear cart
                </button>
            </div>
            <div className="flex pb-2 border-b items-center w-full">
                <img src={book} alt="" className="w-12 h-12" />
                <div className='px-2 w-full flex justify-between text-[10px]'>
                    <div className=''>
                        <p>title:</p>
                        <p>catagory:</p>
                        <p>Qty:</p>
                    </div>
                    <div className="space-y-2">
                        <p>$12.6</p>
                        <button className="mr-2 text-red-400">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between text-[10px]'>
                <div>
                    <p>Subtotal</p>
                    <p className="">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='mr-8'>
                    <p>$45.6</p>
                </div>
            </div>
            <div className='flex flex-col justify-center text-xs space-y- '>
                <button className="bg-blue-500 text-white w-full rounded-[4px] py-1">
                    Checkout
                </button>
                <button className='my-2'>
                    <Link to='/'>Continue Shopping --</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cart
