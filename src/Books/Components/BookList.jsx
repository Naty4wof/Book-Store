import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bookImage from "../../assets/book-img3.jpg";
import TaskService from "../../TaskService";
import { useCartUpdate } from "../cartContext";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]); // Filtered books for display
  const [selectedGenre, setSelectedGenre] = useState("Choose A Genre"); // Track selected genre
  const addToCart = useCartUpdate();

  // Fetch books
  const fetchProd = async () => {
    try {
      const response = await TaskService.getBooks();
      const bookData = response.data;

      console.log("Fetched Books:", bookData);

      setBooks(bookData);
      setFilteredBooks(bookData); // Initially show all books
    } catch (err) {
      console.error("Error fetching books:", err.message);
    }
  };

  // Fetch books on component mount
  useEffect(() => {
    fetchProd();
  }, []);

  // Update filtered books whenever selectedGenre or books change
  useEffect(() => {
    console.log("Selected Genre:", selectedGenre);
    console.log("Books:", books);
  
    if (selectedGenre === "Choose A Genre") {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter((book) => {
        console.log(`Filtering Book: ${book.title}, Catagory: ${book.catagory}`);
        return book.catagory === selectedGenre; // Use `catagory` instead of `genre`
      });
  
      console.log("Filtered Books:", filtered);
      setFilteredBooks(filtered);
    }
  }, [selectedGenre, books]);
  

  // Handle genre change
  const handleGenreChange = (e) => setSelectedGenre(e.target.value);

  return (
    <div className="mx-32 mb-32">
      <div>
        <div>
          <p className="font-bold text-xl">Top Sellers</p>
          <select
            className="my-2 bg-slate-200 px-2 py-1 text-xs rounded-md"
            value={selectedGenre}
            onChange={handleGenreChange}
          >
            <option>Choose A Genre</option>
            <option>Business</option>
            <option>Fiction</option>
            <option>Horror</option>
            <option>Adventure</option>
          </select>
        </div>

        <div className="space-x-16 flex overflow-x-auto p-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div className="flex space-x-4">
            {filteredBooks.length === 0 ? (
              <p>No books available</p>
            ) : (
              filteredBooks.map((book) => (
                <div key={book._id} className="flex rounded-[4px] max-w-[350px] min-w-[300px]">
                  <img
                    className="rounded-[4px] transform hover:scale-105 duration-200 p-2 h-[210px] w-[160px]"
                    src={`http://localhost:7000${book.file?.filePath}`}
                    alt={book.title}
                  />
                  <div className="flex flex-col justify-center space-y-4">
                    <Link to={`/BookDetail/${book._id}`}>
                      <p className="font-bold">{book.title}</p>
                    </Link>
                    <p className="text-zinc-900 text-sm">{book.description}</p>
                    <div className="flex space-x-2">
                      <p className="font-medium text-sm">${book.newPrice}</p>
                      <p className="font-medium text-sm line-through">${book.oldPrice}</p>
                    </div>
                    <button
                      onClick={() =>
                        addToCart({
                          id: book._id,
                          title: book.title,
                          price: book.newPrice,
                          image: bookImage,
                        })
                      }
                      className="bg-yellow-400 py-1 rounded-sm text-xs font-bold w-full"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
