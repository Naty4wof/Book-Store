import React, {useState} from 'react'
import Navbar from '../../Components/Navbar'
import AddBooks from './AddBooks'
import ManageBooks from './ManageBooks'
import { useNavigate } from 'react-router-dom'
import Book from "../../../assets/book.png";
import profile from "../../../assets/user.gif";
import heart from "../../../assets/heart.png";

const Admin = () => {
    const navigate = useNavigate();

    const addBooks =() =>{
        navigate("/add-books")
    }
    const manageBooks =() =>{
        navigate("/manage-books")
    }
    
    return (
        <div>
            <div>
                <div className="flex justify-between w-full px-32 py-4">
                    <div className="space-x-8 flex items-center">
                        <div>
                            <img className="w-8" src={Book} alt="Home" />
                        </div>
                        <div>
                        <input
                            className="w-48 py-[2px] border rounded-lg outline-none bg-zinc-100 placeholder:text-zinc-500 text-[10px] px-4"
                            type="text"
                            placeholder="What are you looking for?"
                        />
                        </div>
                    </div>
                    <div className="flex items-center space-x-5">
                        <img className="w-4" src={profile} alt="Login" />
                        <img className="w-4" src={heart} alt="Wishlist" />
                    </div>
                </div>
                <div className='bg-zinc-100 m-8 flex justify-between pb-8'>
                    <div className=''>
                        <p className='font-bold'>Book store inventory</p>
                        <p className='text-[10px]'>Dashboard</p>
                    </div>
                    <div className="space-x-4">
                        <button
                        onClick={manageBooks}
                        className="text-[10px] text-purple-700 border border-purple-700 px-4 py-1">
                            Manage Books
                        </button>
                        <button
                         onClick={addBooks}                        
                        className="text-[10px] border border-purple-700 bg-purple-700 text-white px-4 py-1">
                            Add Books                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default Admin

