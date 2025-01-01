import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext"; // Import AuthContext

const CartContext = createContext();
const CartUpdateContext = createContext();

export const useCart = () => useContext(CartContext);
export const useCartUpdate = () => useContext(CartUpdateContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth(); // Get user from AuthContext
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (user) {
      fetchCart(user._id);
    }
  }, [user]);

  const fetchCart = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:7000/api/cart/${userId}`);
      const fetchedCart = response.data.items.map((item) => ({
        id: item.productId._id,
        title: item.productId.title,
        price: item.productId.newPrice,
        image: item.productId.file?.filePath,
        quantity: item.quantity,
      }));
      setCart(fetchedCart);
      setCartCount(fetchedCart.reduce((total, item) => total + item.quantity, 0));
    } catch (error) {
      console.error("Error fetching cart:", error.message);
    }
  };

  const saveCart = async (updatedCart) => {
    try {
      await axios.post("http://localhost:7000/api/cart/save", {
        userId: user._id, // Use the actual user ID
        items: updatedCart.map((item) => ({
          productId: item.id,
          quantity: item.quantity || 1,
        })),
      });
    } catch (error) {
      console.error("Error saving cart:", error.message);
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      saveCart(updatedCart);
      setCartCount((prevCount) => prevCount + 1);
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      saveCart(updatedCart);
      setCartCount((prevCount) =>
        prevCart.find((item) => item.id === productId)
          ? prevCount - prevCart.find((item) => item.id === productId).quantity
          : prevCount
      );
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    setCartCount(0);
    saveCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, cartCount }}>
      <CartUpdateContext.Provider
        value={{ addToCart, removeFromCart, clearCart }}
      >
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
};
