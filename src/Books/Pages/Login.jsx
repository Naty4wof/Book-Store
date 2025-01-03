import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import TaskService from '../../TaskService'; // Import the API module

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await TaskService.login(formData); // Call the login API
      localStorage.setItem('jwtToken', data.token); // Save the token
      alert(`Welcome back !`);
      navigate('/'); // Navigate to a protected route
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='px-4 py-8 border rounded-md border-zinc-300 flex justify-center mt-64 m-auto max-w-[250px]'>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className='flex justify-center font-bold text-sm'>
            <p>Please Login</p>
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <div>
            <p className='text-[10px] font-bold'>Email</p>
            <input
              type="email"
              name="email"
              className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-xs"
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <p className='text-[10px] font-bold'>Password</p>
            <input
              type="password"
              name="password"
              className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-xs"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className='text-white text-xs hover:bg-blue-600 bg-blue-500 px-2 rounded-[4px] py-[2px] font-bold'>
            Login
          </button>
          <div>
            <p className='text-[10px]'>Don't have an account? Please <Link to='/signup' className='text-blue-500'>Register</Link></p>
          </div>
          <button type="button" className="bg-black text-white w-full text-[10px] mb-8 py-[2px] rounded-[4px]">
            Signin with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
