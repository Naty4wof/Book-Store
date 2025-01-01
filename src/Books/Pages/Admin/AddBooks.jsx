import React, { useState } from 'react';
import TaskService from '../../../TaskService';
import Admin from './Admin';

const AddBooks = () => {
  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [catagory, setCatagory] = useState('');
  const [trending, setTrending] = useState(false);
  const [oldPrice, setOldPrice] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [file, setFile] =useState(null)

  // Event handlers
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCatagoryChange = (e) => setCatagory(e.target.value);
  const handleTrendingChange = (e) => setTrending(e.target.checked);
  const handleOldPriceChange = (e) => setOldPrice(e.target.value);
  const handleNewPriceChange = (e) => setNewPrice(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0])

  const addBook = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    formData.append("file", file); // Correct key as expected by the backend
    formData.append("title", title);
    formData.append("description", description);
    formData.append("catagory", catagory);
    formData.append("trending", trending); // Ensure this is a boolean
    formData.append("oldPrice", oldPrice); // Convert to number if needed
    formData.append("newPrice", newPrice); // Convert to number if needed
    
    console.log("Form Data:");
    formData.forEach((value, key) => console.log(key, value));


    try {
      const res = await TaskService.addBook(formData);
      alert("Successfully added");
      console.log("Added book:", res.data);
    } catch (error) {
      console.error('Error adding book:', error.response ? error.response.data : error.message);
    }
  };
  
  
  return (
    <div className="bg-zinc-100 h-screen">
      <Admin/>
      <div className="p-8 bg-white rounded-[4px] flex items-center m-auto h-fit max-w-[300px]">
        <div className="space-y-2 w-full">
          <div className="flex font-bold text-sm">
            <p>Add New Book</p>
          </div>
          <form onSubmit={addBook}>
            <div>
              <p className="text-[10px] font-bold">Title</p>
              <input
                type="text"
                name='title'
                className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-[12px]"
                placeholder="Enter book title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div>
              <p className="text-[10px] font-bold">Description</p>
              <input
                type="text"
                name='description'
                className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-[12px]"
                placeholder="Enter book description"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div>
              <select className='text-xs bg-slate-100 rounded-md my-2 p-1' onChange={handleCatagoryChange}>
                <option value="">Choose a catagory</option>
                <option value="Business">Business</option>
                <option value="Fiction">Fiction</option>
                <option value="Horror">Horror</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>
            <div className="space-x-2 flex text-xs">
              <input
                type="checkbox"
                name='trending'
                checked={trending}
                onChange={handleTrendingChange}
              />
              <p>Trending</p>
            </div>
            <div>
              <p className="text-[10px] font-bold">Old Price</p>
              <input
                type="text"
                name='oldPrice'
                className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-[12px]"
                placeholder="Old Price"
                value={oldPrice}
                onChange={handleOldPriceChange}
              />
            </div>
            <div>
              <p className="text-[10px] font-bold">New Price</p>
              <input
                type="text"
                name='newPrice'
                className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-[12px]"
                placeholder="New Price"
                value={newPrice}
                onChange={handleNewPriceChange}
              />
            </div>
            <div className="space-y-2 mb-2">
              <p className="text-[10px] font-bold">Cover image</p>
              <input
                className='text-xs' 
                type="file" 
                accept='image'
                onChange={handleFileChange}
              />
            </div>
            <button
              type="submit"
              className="font-bold bg-green-400 text-white w-full text-[10px] py-[4px] rounded-[4px]"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
