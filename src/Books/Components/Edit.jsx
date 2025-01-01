import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskService from "../../TaskService";

function Edit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [catagory, setCatagory] = useState("");
  const [trending, setTrending] = useState(false);
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [file, setFile] = useState(null)

  const { id } = useParams();
  const navigate = useNavigate(); // To navigate after update

  // Fetch the book details on component load
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await TaskService.getBook(id);
        const book = response.data;
        console.log("this is the game", book)

        // Populate state with current book details
        setTitle(book.title);
        setDescription(book.description);
        setCatagory(book.catagory);
        setTrending(book.trending);
        setOldPrice(book.oldPrice);
        setNewPrice(book.newPrice);
        setFile(book.file)
      } catch (err) {
        console.error("Error fetching book details: ", err);
      }
    };

    fetchBookDetails();
  }, [id]);

  // Handle form submission
  // Handle form submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    formData.append("title", title);
    formData.append("description", description);
    formData.append("catagory", catagory);
    formData.append("trending", trending);
    formData.append("oldPrice", oldPrice);
    formData.append("newPrice", newPrice);
  
    if (file instanceof File) {
      formData.append("file", file);
    }
  
    // Debug: Check FormData values
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    try {
      const response = await TaskService.updateBook(id, formData);
      alert("Book updated successfully");
      console.log("Response:", response.data);
      navigate("/manage-books");
    } catch (err) {
      console.error("Failed to update the book: ", err);
      alert("Failed to update the book");
    }
  };
  


  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Edit Book</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-bold">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-bold">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <select className="bg-slate-100 text-sm font-medium p-1 rounded-md" onChange={(e) => setCatagory(e.target.value)}>
            <option value="">Choose a catagory</option>
            <option value="Business">Business</option>
            <option value="Fiction">Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Adventure">Adventure</option>
          </select>
        </div>

        <div>
          <label className="block font-bold">Trending:</label>
          <input
            type="checkbox"
            checked={trending}
            onChange={(e) => setTrending(e.target.checked)}
            className="ml-2"
          />
        </div>

        <div>
          <label className="block font-bold">Old Price:</label>
          <input
            type="number"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-bold">New Price:</label>
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="space-y-2 mb-2">
          <p className="text-[10px] font-bold">Cover image</p>
          {file && (
            <div className="mb-2">
              <img
                src={`http://localhost:7000${file.filePath}`}
                alt={title}
                className="h-20 w-20 object-cover rounded-md"
              />
            </div>
          )}
          <input
            className="text-xs"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])} // Handle new uploads
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
        >
          Update Book
        </button>
      </form>
    </div>
  );
}

export default Edit;
