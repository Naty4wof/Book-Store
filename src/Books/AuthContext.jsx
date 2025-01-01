import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create Contexts
const AuthContext = createContext();
const AuthUpdateContext = createContext();

// Custom Hooks for Accessing Context
export const useAuth = () => useContext(AuthContext);
export const useAuthUpdate = () => useContext(AuthUpdateContext);

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User object
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Auth state

  // Fetch User Details from Token (Assuming JWT)
  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Get token from localStorage
        },
      });
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error fetching user:", error.message);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      <AuthUpdateContext.Provider value={setUser}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
};
