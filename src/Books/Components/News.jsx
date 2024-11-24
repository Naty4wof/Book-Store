import React from 'react'
import news from '../../assets/chair.jpg'
const News = () => {
  return (
    <div className='mx-32 mb-24'>
        <p className='text-xl font-bold'>News</p>
      <div className='flex items-center space-x-4'>
        <div>
            <p className='font-bold mb-4 text-sm'>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
            <p className='text-xs text-zinc-600 max-w-[400px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequuntur sapiente, tempora eum repellat reiciendis accusantium asperiores reprehenderit.
            </p>
        </div>
        <div className='flex items-center space-x-4'>
            <img 
            className='h-[210px] w-[160px]' 
            src={news} alt="" 
            />
            <div>
                <p className='font-bold mb-4 text-sm'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                </p>
                <p className='text-xs text-zinc-600 max-w-[400px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequuntur sapiente, tempora eum repellat reiciendis accusantium asperiores reprehenderit.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default News