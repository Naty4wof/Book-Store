import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Books/Pages/Home';
import BookDetail from './Books/Pages/BookDetail';
import Cart from './Books/Pages/Cart';
import Login from './Books/Pages/Login';
import Admin from './Books/Pages/Admin/Admin';
import Edit from './Books/Components/Edit';
import { CartProvider } from './Books/cartContext'; // Import your CartProvider
import Signup from './Books/Pages/Signup';
import ProtectedRoute from './Books/Components/ProtectedRoute';
import ManageBooks from './Books/Pages/Admin/ManageBooks';
import AddBooks from './Books/Pages/Admin/AddBooks';
import { AuthProvider } from './Books/AuthContext';

const App = () => {
  return (
    <div>
      {/* Wrap the Router with CartProvider */}
      <AuthProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/BookDetail/:id" element={ <ProtectedRoute><BookDetail /></ProtectedRoute>} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/edit-book/:id" element={<Edit />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/manage-books" element={<ManageBooks />} />
              <Route path="/add-books" element={<AddBooks />} />
            </Routes>
          </Router>
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
