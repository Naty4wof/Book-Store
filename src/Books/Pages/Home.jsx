import React from 'react'
import logo from '../../assets/book-img.jpg'
import Navbar from '../Components/Navbar'
import BookList from '../Components/BookList'
import News from '../Components/News'
import Footer from '../Components/footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='mx-32 my-16 flex justify-between items-center space-x-8 '>
        <div className='flex flex-col w-fit space-y-4'>
          <h1 className='text-2xl font-bold'>
            New Releases This Week 
          </h1>
          <p className='max-w-[400px] text-xs text-zinc-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias sunt sit, placeat blanditiis necessitatibus est nostrum ducimus voluptas voluptatem?
          </p>
          <button className='w-fit bg-yellow-400 hover:bg-yellow-500 px-4 py-1 text-xs font-bold'>
              Subscribe
          </button>
        </div>
        <div className='flex '>
          <img className='border h-[300px] w-[250px]' src={logo} alt="" />
        </div>
      </div>
      <BookList/>
      <News/>
      <Footer/>
    </div>
    
  )
}

export default Home
