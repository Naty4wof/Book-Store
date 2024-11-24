import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Books/Pages/Home'
import BookDetail from './Books/Pages/BookDetail';
import Cart from './Books/Pages/Cart';
import Login from './Books/Pages/Login';
import Admin from './Books/Pages/Admin';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Book-Detail" element={<BookDetail />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
