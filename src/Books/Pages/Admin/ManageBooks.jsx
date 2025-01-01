import React, { useEffect, useState } from "react";
import TaskService from "../../../TaskService";
import { Link } from "react-router-dom";
import Admin from "./Admin";

function ManageBooks() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        try {
            const response = await TaskService.getBooks();
            setBooks(response.data);
        } catch (err) {
            console.log("Error fetching the books:", err);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const deleteBook = async (bookId) => {
        try {
            console.log("Deleting book with ID:", bookId); // Debug log
            await TaskService.deleteBook(bookId); // Pass correct ID
            setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
            alert("Book deleted successfully");
        } catch (err) {
            console.error("Unable to delete book:", err);
            alert("Unable to delete the book");
        }
    };

    return (
        <div className="bg-zinc-100 h-screen">
            <Admin/>
            <div className="p-2 bg-white m-auto max-w-[500px] border">
                <div className="flex justify-between px-2">
                    <p className="font-bold text-xs">All Books</p>
                    <button className="text-xs px-2 text-white font-bold">SEE ALL</button>
                </div>
                <div className="py-2">
                    {books.length === 0 ? (
                        <p>No books available</p>
                    ) : (
                        books.map((book) => (
                            <div key={book._id}>
                                <div className="border-x text-xs font-bold flex items-center justify-evenly">
                                    <p>#</p>
                                    <p>Book Title</p>
                                    <p>Category</p>
                                    <p>Price</p>
                                    <p>Actions</p>
                                </div>
                                <div className="text-xs flex items-center justify-evenly">
                                    <p>number</p>
                                    <p>{book.title}</p>
                                    <p>{book.catagory}</p>
                                    <p>{book.newPrice}</p>
                                    <div className="flex space-x-4">
                                        <Link to={`/edit-book/${book._id}`}>
                                            <button className="text-[10px] font-bold">Edit</button>
                                        </Link>
                                        <button
                                            onClick={() => deleteBook(book._id)}
                                            className="text-[10px] font-bold text-white bg-red-600 px-2 py-[2px]"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default ManageBooks;
