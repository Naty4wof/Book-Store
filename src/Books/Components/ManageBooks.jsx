import React from 'react'

function ManageBooks() {
  return (
    <div className='p-2 bg-white m-auto w-fit border '>
        <div className="flex justify-between px-2">
        <p className="font-bold text-xs">All Books</p>
        <button className="text-xs px-2text-white font-bold">
            SEE ALL
        </button>
        </div>
        <div className='py-2'>
            <div className='border-x text-xs font-bold flex items-center justify-evenly '>
                <p>#</p>
                <p>Book Title</p>
                <p>Catagory</p>
                <p>Price</p>
                <p>Actions</p>
            </div>
            <div className='text-xs flex items-center justify-evenly '>
                <p>number</p>
                <p>title</p>
                <p>catagory</p>
                <p>Price</p>
                <div className="flex space-x-4">
                <button className='text-[10px] font-bold'>Edit</button>
                <button className='text-[10px] font-bold text-white bg-red-600 px-2 py-[2px]'>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManageBooks
