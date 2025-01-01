import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:7000/api/signup', formData);
      if (data.name) {
        alert(`Signup successful! Welcome, ${data.name}`);
        navigate('/login');
      } else {
        alert('Signup successful! Please log in.');
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className='px-4 py-8 border rounded-md border-zinc-300 flex justify-center mt-64 m-auto max-w-[250px]'>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className='flex justify-center font-bold text-sm'>
            <p>Please Signup</p>
          </div>
          <div>
            <p className='text-[10px] font-bold'>Full Name</p>
            <input
              type="text"
              name="name"
              className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-xs"
              placeholder='Your Full Name'
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div>
            <p className='text-[10px] font-bold'>Email</p>
            <input
              type="email"
              name="email"
              className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-xs"
              placeholder='Email Address'
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <p className='text-[10px] font-bold'>Password</p>
            <input
              type="password"
              name="password"
              className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-xs"
              placeholder='Password'
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div>
            <p className='text-[10px] font-bold'>Confirm Password</p>
            <input
              type="password"
              name="confirmPassword"
              className="outline-none border border-zinc-300 py-1 w-full placeholder:text-zinc-500 pl-4 text-xs"
              placeholder='Confirm Password'
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </div>
          <button
            type="submit"
            className='text-white text-xs hover:bg-blue-600 bg-blue-500 px-2 rounded-[4px] py-[2px] font-bold'>
            Signup
          </button>
          <div>
            <p className='text-[10px]'>Already have an account? <Link to='/login' className='text-blue-500'>Sign-in</Link></p>
          </div>
          <button type="button" className="bg-black text-white w-full text-[10px] mb-8 py-[2px] rounded-[4px]">
            Signin with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
