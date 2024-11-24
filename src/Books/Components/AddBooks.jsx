import React, { useState } from 'react';
import TaskService from '../../TaskService';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [catagory, setCatagory] = useState('');
  const [trending, setTrending] = useState(false);
  const [oldPrice, setOldPrice] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [cover, setCover] = useState(null);

  // Event handlers
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCatagoryChange = (e) => setCatagory(e.target.value);
  const handleTrendingChange = (e) => setTrending(e.target.checked);
  const handleOldPriceChange = (e) => setOldPrice(e.target.value);
  const handleNewPriceChange = (e) => setNewPrice(e.target.value);
  const handleCoverChange = (e) => setCover(e.target.files[0]);

  const addBook = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create FormData object
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('catagory', catagory);
    formData.append('trending', trending);
    formData.append('oldPrice', oldPrice);
    formData.append('newPrice', newPrice);
    formData.append('cover', cover);

    try {
      // Send data using TaskService
      const response = await TaskService.addBook(formData);
      console.log('Book added successfully:', response.data);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
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
              className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-[12px]"
              placeholder="Enter book description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div>
            <p className="text-[10px] font-bold">Catagory</p>
            <input
              type="text"
              className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-[12px]"
              placeholder="Enter book catagory"
              value={catagory}
              onChange={handleCatagoryChange}
            />
          </div>
          <div className="space-x-2 flex text-xs">
            <input
              type="checkbox"
              checked={trending}
              onChange={handleTrendingChange}
            />
            <p>Trending</p>
          </div>
          <div>
            <p className="text-[10px] font-bold">Old Price</p>
            <input
              type="text"
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
              className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-[12px]"
              placeholder="New Price"
              value={newPrice}
              onChange={handleNewPriceChange}
            />
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-bold">Cover image</p>
            <input
              className="text-xs mb-2"
              accept="image/*"
              type="file"
              onChange={handleCoverChange}
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
  );
};

export default AddBooks;
