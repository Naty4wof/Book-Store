import React, {useEffect, useState}from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import book from '../../assets/book.png'
import TaskService from '../../TaskService'
import { useCartUpdate } from '../cartContext'

const BookDetail = () => {
  const [bookData, setBookData] = useState({})
  const {id} = useParams();
  const addCart = useCartUpdate();

  useEffect(() => {
    const fetchBook = async() => {
      try{
        const response = await TaskService.getBook(id);
        setBookData(response.data);
        console.log("Book data fetched:", response.data);
        console.log("Image URL:", `http://localhost:7000${bookData.file?.filePath}`);
      }catch(err){
        console.log("error fetchimg book detail : ", err)
      }
      
    }
    fetchBook()
  }, [id])
  

  return (
    <div className=''>
      <Navbar/>
      <div className='border p-2 rounded-sm mx-32 my-16 w-fit flex flex-col space-y-4'>
        <p className='font-bold text-xl'>{bookData.title}</p>
        <div className='rounded-[4px] p-1'>
            <img 
              className='rounded-[4px] transform hover:scale-105 duration-200 h-[210px] w-[160px]' 
              src={`http://localhost:7000${bookData.file?.filePath}`} 
              alt={bookData.title} />
        </div>
        <div className='text-xs max-w-[350px] flex flex-col justify-center space-y-4'>
            <div className='flex'>
                <span className='font-bold'>Author:</span>
                <p className="text-zinc-500">{bookData.author}</p> 
            </div>
            <div className='flex'>
                <span className='font-bold'>Published:</span>
                <p className="text-zinc-500"></p>
            </div>
            <div className='flex'>
                <span className='font-bold'>Catagory:</span>
                <p className="text-zinc-500">{bookData.catagory}</p>
            </div>
            <div className='flex'>
                <span className='font-bold'>Description:</span>
                <p className="text-zinc-500">{bookData.description}</p>
                
            </div>
            <button 
            onClick={() =>
              addCart({
                id: bookData._id,
                title: bookData.title,
                price: bookData.newPrice,
              })
            }
            className='px-4 py-1 rounded-[4px] w-fit bg-yellow-400 hover:bg-yellow-500 text-xs font-bold'>
              Add to cart
            </button>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
