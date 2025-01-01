import React from "react";
import { Link } from "react-router-dom";
import Book from "../../assets/book.png";
import profile from "../../assets/user.gif";
import cart from "../../assets/cart.png";
import heart from "../../assets/heart.png";
import { useCart } from "../cartContext"; // Import cart context to get cartCount

const Navbar = () => {
  const { cartCount } = useCart(); // Get the cart count from the context

  return (
    <div className="flex justify-between w-full px-32 mt-2">
      <div className="space-x-8 flex items-center">
        <div>
          <Link to="/">
            <img className="w-8" src={Book} alt="Home" />
          </Link>
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
        <Link to="/login">
          <img className="w-4" src={profile} alt="Login" />
        </Link>
        <img className="w-4" src={heart} alt="Wishlist" />
        <div className="flex items-center">
          <Link className="flex items-center relative" to="/Cart">
            <img className="w-6" src={cart} alt="Cart" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
