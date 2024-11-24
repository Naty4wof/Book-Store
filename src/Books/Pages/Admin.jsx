import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import AddBooks from '../Components/AddBooks'
import ManageBooks from '../Components/ManageBooks'

const Admin = () => {
    const [activeTab, setActiveTab]=useState('');

    const addBooks =() =>{
        setActiveTab('AddBooks')
    }
    const manageBooks =() =>{
        setActiveTab('ManageBooks')
    }
    
    return (
        <div className="bg-zinc-100 h-screen">
            <div>
                <Navbar/>
                <div className='m-8 flex justify-between pb-8'>
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
                <div>
                    {activeTab === 'ManageBooks' && <ManageBooks/>}
                    {activeTab === 'AddBooks' && <AddBooks/>}
                </div>
            </div>
        </div>
    )
  }

export default Admin
