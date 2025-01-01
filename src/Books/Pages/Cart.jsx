import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useCart, useCartUpdate } from "../cartContext"; // Import cart context

const Cart = () => {
  const { cart } = useCart(); // Get cart items from context
  const addToCart = useCartUpdate(); // Get addToCart to clear/remove items (if needed)
  // const saveToDb = async() =>{
    
  // }

  const clearCart = () => {
    addToCart([]); // Clear the cart by resetting it to an empty array
  };

  const removeItem = (id) => {
    addToCart((prevCart) => prevCart.filter((item) => item.id !== id)); // Remove item by filtering
  };

  const subtotal = cart.reduce((total, item) => total + item.price, 0); // Calculate subtotal

  return (
    <div>
      <Navbar />
      <div className="p-2 m-32 space-y-4 border shadow-sm">
        <div className="flex justify-between">
          <p>Shopping Cart</p>
          <button
            onClick={clearCart}
            className="text-[10px] text-white p-1 bg-red-600"
          >
            Clear Cart
          </button>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex pb-2 border-b items-center w-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12"
              />
              <div className="px-2 w-full flex justify-between text-[10px]">
                <div>
                  <p>Title: {item.title}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <div className="space-y-2">
                  <p>${item.price}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mr-2 text-red-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="flex justify-between text-[10px]">
          <div>
            <p>Subtotal</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="mr-8">
            <p>${subtotal.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-xs ">
          <button className="bg-blue-500 text-white w-full rounded-[4px] py-1">
            Checkout
          </button>
          <Link to="/">
            <div className="flex items-center justify-center">
              <button className="my-2">Continue Shopping --</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
