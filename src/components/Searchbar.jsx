import React from 'react'

const Searchbar = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-2'>
      <h1 className='mb-5'>Home</h1>
      <input 
      className='w-80 rounded-lg h-14'
      type="text"
      name='products'
      placeholder='Search a product'
       />
    </div>
  )
}

export default Searchbar
